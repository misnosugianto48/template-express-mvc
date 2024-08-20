import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: { globals: globals.browser },
    files: ['src/**/*.js'],
    rules: {
      semi: 'error',
      'prefer-const': 'error',
      'require-await': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-const-assign': 'error',
      'no-constant-condition': 'error',
      'no-undef': 'error',
      'no-unused-vars': 'error',
      'use-isnan': 'error',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-use-before-define': 'error',
      'valid-typeof': 'error',
      'constructor-super': 'error',
      'no-ex-assign': 'error',
      'no-import-assign': 'error',
      'no-func-assign': 'error',
      'no-irregular-whitespace': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-empty': 'error',
      'no-global-assign': 'error',
      'no-redeclare': 'error',
    },
  },
  pluginJs.configs.recommended,
];
