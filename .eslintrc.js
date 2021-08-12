module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  extends: '@react-native-community',
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  "rules": {
    "prettier/prettier": 0,
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      },
    ],
  }
};