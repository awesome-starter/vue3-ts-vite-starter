# Git Hooks

当提交或推送代码到 Git 时（ e.g. GitHub, GitLab, Gitee ），可以使用这些 Git 钩子来检查提交的消息合法性、或者运行测试、检查代码等。

目前使用的是 Husky ，一个很流行的钩子管理器，支持所有客户端 Git Hooks 。

## 常用钩子

一般有两个钩子是最常使用。

### pre-commit

预提交钩子通常用来进行代码风格格式化（基于 Prettier ）以及代码质量检查（基于 ESLint ），触发钩子后则是配合 `lint-staged` 来运行这些检查操作。

在代码被 commit 到暂存区之前，会被格式化或者检查，如果有代码问题，会在这个环节检查出来并提醒修改，可以有效防止有问题的代码被提交到 Git 上。

钩子的常用配置（位于 [.husky/pre-commit](./pre-commit) ）文件里：

```bash
# 或者使用 `npx` 或 `pnpm exec`
npm exec lint-staged --concurrent false
```

而 `lint-staged` 的配置位于 `package.json` 里：

```json
{
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": ["prettier --write", "eslint --fix"]
  }
}
```

如果需要其它操作也可以追加，例如运行单元测试等。

### commit-msg

提交消息钩子通常用来检查 Commit 的 Message 规范性。

钩子的常用配置（位于 [.husky/commit-msg](./commit-msg) ）文件里：

```bash
# 或者使用 `npx` 或 `pnpm exec`
# 需要提前安装依赖 `npm i -D @bassist/commit`
npm exec commit $1
```

本模板暂未内置该钩子，可以通过 Husky 的命令来添加：

```bash
npx husky set .husky/commit-msg "npm exec commit $1"
```

关于 Commit Message 规范性的作用和如何编写，可以参考这篇文章：

- [Commit message 和 Change log 编写指南](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

## 相关文档

- [Husky](https://typicode.github.io/husky/getting-started.html)
- [@bassist/commit](https://github.com/chengpeiquan/bassist/tree/main/packages/commit)
- [lint-staged](https://github.com/okonet/lint-staged)
