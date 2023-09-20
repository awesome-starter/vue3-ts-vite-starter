// @ts-check
import { defineConfig, prettier, unocss, vue } from '@bassist/eslint'

// https://github.com/chengpeiquan/bassist/tree/main/packages/eslint
export default defineConfig([
  ...prettier,
  ...unocss,
  ...vue,
  {
    rules: {
      // By default, this rule is `off`
      // 'vue/component-tags-order': 'error',
      '@unocss/order': 'off',
    },
    ignores: ['dist'],
  },
])
