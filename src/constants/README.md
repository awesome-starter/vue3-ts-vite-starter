# 常量管理

在 `/config` 目录下配置 `.env` 文件的环境变量，在 Vite 项目里虽然可以通过 `import.meta.env.xxx` 获取，但如果后期需要迁移构建工具，例如回归 Webpack ，则需要回滚为 `process.env` ，对大型项目来说这是一个很高的迁移成本。

所以建议把项目里的常量统一做一层封装，在常量目录里统一维护。

```diff
# 如果原来直接通过 `import.meta` 上的变量判断
-const isDev = import.meta.env.MODE === 'dev'

# 现在改成使用来常量判断
+import { ENV_MODE } from '@/constants'
+const isDev = ENV_MODE === 'dev'
```

而且有一些环境变量是针对 `dev` / `prod` 这样不同的环境单独配置的，可能在开发环境的 `.env.dev` 里配置了，但在 `.env.prod` 里忘记配置，上线后就会出现生产事故，在封装时也可以做一个容错处理：

```ts
// @/constants/index.ts

// 接口的网关域名
// 防止生产环境忘记配置变量，讲其默认为生产环境的网关
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://example.com'
```
