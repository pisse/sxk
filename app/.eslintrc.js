module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  plugins: [
    'react'
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
    amd: true,
    jquery: true
  },
  // add your custom rules here
  'rules': {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    "no-unused-vars" : 0,
    // "no-undef": 0,
    "eqeqeq": 0,
    // "semi": [2, "always"],

    "camelcase": 0,
    "no-cond-assign": 0,
    'one-var': 0,
    'no-trailing-spaces ': 0
  }
}
