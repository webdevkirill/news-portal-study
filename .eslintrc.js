module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'max-len': [2, { code: 120 }],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'arrow-parens': 'off',
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-shadow': 'warn',
    'object-curly-newline': 'off',
    'react/prop-types': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'no-underscore-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'wrap-iife': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-use-before-define': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/require-default-props': 'off',
    'no-param-reassign': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'consistent-return': 'off',
  },
  globals: {
    React: true,
    jsdom: true,
    JSX: true,
    __IS_DEV__: true,
  },
  ignorePatterns: ['/build'],
};
