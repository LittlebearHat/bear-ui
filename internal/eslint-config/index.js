const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // vue3解析 https://eslint.vuejs.org/
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/html-self-closing': 'off',
    // 'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/prefer-import-from-vue': 'off'
  },
  globals: {
    defineOptions: 'writable'
  }
})
