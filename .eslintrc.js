module.exports = {
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      "plugin:import/recommended"
    ],
    plugins: ['react', '@typescript-eslint'],
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    settings: {
      "import/resolver": {
        "typescript": {}
      },
      "import/ignore": ["node_modules","blueprint-templates"]
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    ignorePatterns: ["./node_modules", "./dist","./blueprint-templates"],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": [0, "unix"],
      quotes: ["warn", "single", {
        "allowTemplateLiterals": true
      }],
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          ignoredNodes: ['ConditionalExpression'],
        },
      ],
      "no-console": "warn",
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': 0,
      "import/namespace": 0,
      "no-unused-vars": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: false
        },
      ],
      "import/prefer-default-export": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-empty": "warn",
    },
  };