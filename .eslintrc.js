module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["typescript", "react-hooks", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",

    "plugin:import/recommended",
    "plugin:react/recommended",
    /**
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y#readme
     */
    "plugin:jsx-a11y/recommended",

    "prettier/@typescript-eslint",
  ],

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "no-console": 2,
    "object-curly-spacing": ["warn", "always"],
    "no-else-return": "warn",
    "arrow-parens": ["error", "as-needed"],
    "space-before-function-paren": 0,
    "no-extra-semi": "error",
    "prefer-const": "off",
    eqeqeq: 2,
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: false },
    ],
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react/prop-types": 0,
    // 'react/display-name': 1,
    // 'jsx-a11y/no-autofocus': false,
    "react/no-children-prop": 2,
    // 'jsx-a11y/click-events-have-key-events': false,
    // 'jsx-a11y/anchor-has-content': false,
    "import/no-default-export": 2,
    "import/no-unresolved": 0,
    "import/export": 0,
    "import/no-named-as-default": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  plugins: ["typescript", "prettier", "react-hooks"],
};
