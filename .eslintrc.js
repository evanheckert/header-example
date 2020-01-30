module.exports = {
  // env: {
  //   'browser': true,
  //   'node': true
  // },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    //
    // '@react-native-community'
  ],
  plugins: [
    // 'react',
    'prettier',
    'react-hooks',
    'import',
    'module-resolver',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaFeatures': { 'jsx': true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: { extensions: [".js", ".jsx",] },
      'babel-module': {
      },
    }
  },
  rules: {
    "babel/camelcase": "off",
    "babel/quotes": "off",
    "comma-dangle": "off",
    complexity: 0,
    "consistent-return": "off",
    "import/no-extraneous-dependencies": "warn",
    "import/no-unresolved": "off",
    "import/order": "off",
    "import/prefer-default-export": 0,
    "jsx-a11y/label-has-for": "off",
    "max-lines-per-function": "off",
    "no-console": 0,
    "no-irregular-whitespace": "warn",
    "no-nested-ternary": "off",
    "no-param-reassign": 0,
    "no-plusplus": "off",
    "no-use-before-define": "off",
    "one-var": [
      "error",
      {
        initialized: "never",
        uninitialized: "always"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 140,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "all",
        useTabs: false
      }
    ],
    "react/boolean-prop-naming": "off",
    "react/button-has-type": "off",
    "react/destructuring-assignment": "off",
    // "react/display-name": 0,
    "react/forbid-component-props": "off",
    "react/forbid-dom-props": "off",
    "react/forbid-elements": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-child-element-spacing": "warn",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [ ".js", ".jsx", ]
      }
    ],
    "react/jsx-fragments": "off",
    "react/jsx-handler-names": "off",
    "react/jsx-max-depth": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-no-literals": "off",
    "react/jsx-pascal-case": "off",
    "react/jsx-props-no-multi-spaces": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-default-props": "off",
    "react/jsx-sort-props": "off",
    "react/no-array-index-key": "off",
    "react/no-children-prop": "off",
    "react/no-danger": "off",
    "react/no-multi-comp": "off",
    "react/no-set-state": "off",
    "react/no-unescaped-entities": "warn",
    "react/no-unsafe": "warn",
    "react/prefer-es6-class": "off",
    "react/prefer-read-only-props": "off",
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/require-optimization": "off",
    "react/sort-comp": "off",
    "react/sort-prop-types": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
  }
}
