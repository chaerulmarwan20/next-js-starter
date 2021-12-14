module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    quotes: [2, "double", { avoidEscape: true }],
    "linebreak-style": "off",
    "arrow-body-style": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-console": ["error", { allow: true }],
  },
};
