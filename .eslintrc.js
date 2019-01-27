module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'standard',
    'prettier',
    'plugin:vue/strongly-recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  "plugins":[
    "prettier"
  ]
}
