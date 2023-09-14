module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: [
        '**/components/**/*.{js,ts,vue}',
        '**/composables/**/*.{js,ts,vue}',
        '**/layouts/**/*.{js,ts,vue}',
        '**/middleware/**/*.{js,ts,vue}',
        '**/pages/**/*.{js,ts,vue}',
        '**/utils/**/*.{js,ts,vue}',
        '**/app.{js,ts,vue}',
        '**/error.{js,ts,vue}'
      ],
      rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off'
      }
    }
  ]
}
