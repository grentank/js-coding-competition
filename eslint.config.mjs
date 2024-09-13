import globals from 'globals';
import pluginJs from '@eslint/js';
import elbrusConfig from '@elbrus/eslint-config';

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  pluginJs.configs.recommended,
  ...elbrusConfig,
  {
    rules: {
      'no-sparse-arrays': 'off',
      'no-console': 'off',
      'guard-for-in': 'off',
      'no-restricted-syntax': 'off',
      'func-names': 'off',
      'consistent-return': 'off',
    },
  },
];
