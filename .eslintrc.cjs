module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
   },
  ignorePatterns: ['generated'],
  extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended'
  ],
  rules: {
      'linebreak-style': 'off',
      semi: 0,
      'no-console': 'off',
      'no-multiple-empty-lines': 'off',
      'max-len': ['warn', { code: 120 }],
      // 'object-curly-newline': ['error', { multiline: true }],
      // indent: ['error', 4],
      'key-spacing': 'off',
      'padded-blocks': 0,
      'no-multi-spaces': 'off',
      'arrow-parens': 'off',
      'no-underscore-dangle': 'off',
      'no-confusing-arrow': 0,
      'no-use-before-define': 'off',
      'switch-colon-spacing': 'off',
      'consistent-return': 'off',
      'keyword-spacing': 'off',
      quotes: [
          'error',
          'single',
          {
              allowTemplateLiterals: true,
              avoidEscape: true,
          },
      ],
      'template-curly-spacing': 'off',
      'no-param-reassign': 'off',
      'implicit-arrow-linebreak': 'off',
      'import/prefer-default-export': 'off',
      'no-unused-expressions': ['error', { allowTernary: true }],
      'prefer-destructuring': 'off',
      'no-return-assign': ['error', 'except-parens'],
      'no-plusplus': 'off',
      'no-fallthrough': 'error',
  },
  env: {
      node: true,
      mocha: true,
  },
};