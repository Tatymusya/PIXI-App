import type { Config } from 'stylelint';

const config: Config = {
  "extends": "stylelint-config-recommended-vue"
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'color-function-notation': 'legacy',
    'named-grid-areas-no-invalid': null,
    'declaration-block-no-redundant-longhand-properties': null,

    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless'],
        ignore: ['after-comment'],
      },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.ts'],
};

export default config;