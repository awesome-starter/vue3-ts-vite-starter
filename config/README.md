# 环境变量

Vite 支持在启动服务或者打包时，通过 `--mode` 参数指定当前的环境，这对于公司业务常常会有开发环境、测试环境、生产环境等不同环境非常友好。

## 官方文档

- [环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html)

## 文件命名规则

如果只有单一环境，可以只使用 `.env` 文件，所有配置都写在这里。

如果有多个环境，可以添加环境后缀，例如 `.env.dev` 只面向开发环境，当使用 `vite --mode dev` 命令时，除了加载 `.env` 文件外，还会加载 `.env.dev` 文件。

当 `.env` 和 `.env.dev` 都存在相同的配置时，`.env.dev` 的配置优先级更高。

目前预留了三个环境的配置文件和运行命令如下：

|  文件名   |        用途        |   服务启动命令   |      打包命令      |
| :-------: | :----------------: | :--------------: | :----------------: |
|   .env    | 通用的环境变量管理 |                  |
| .env.dev  |      开发环境      |   npm run dev    | npm run build:dev  |
| .env.test |      测试环境      | npm run dev:test | npm run build:test |
| .env.prod |      生产环境      | npm run dev:prod |   npm run build    |

## 新增其他环境

按 [文件命名规则](#文件命名规则) 添加环境文件，例如为 UAT 环境新增一个 `.env.uat` 配置。

打开项目根目录下的 `package.json` 文件，在 `scripts` 新增对应的脚本命令：

```json
{
  "scripts": {
    "dev:uat": "vite --mode uat --host",
    "build:uat": "vue-tsc --noEmit && vite --mode uat build"
  }
}
```

这样在命令行运行 `npm run dev:uat` 就可以启动 UAT 环境的服务了，打包同理。

## 配置变量

默认情况下，所有变量都必须以 `VITE_` 开头才会暴露给经过 Vite 处理的代码。

例如 `VITE_API_BASE_URL=https://api.github.com` ，就可以通过 `import.meta.env.VITE_API_BASE_URL` 获取。
