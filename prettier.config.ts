import type { Options } from 'prettier';

const config: Options = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  useTabs: false,
  tabWidth: 2,
  endOfLine: 'lf',
  arrowParens: 'avoid',
  bracketSpacing: true,
  wrapAttributes: true,
  singleAttributePerLine: true,
  vueIndentScriptAndStyle: true,
  proseWrap: 'preserve',
  embeddedLanguageFormatting: 'auto',
};

export default config;