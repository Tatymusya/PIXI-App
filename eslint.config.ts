import vue from 'eslint-plugin-vue';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
    {
        ignores: [
        'node_modules/',
        'dist/',
        '.env',
        '.env.*',
        '*.d.ts',
        'vite.config.ts'
        ],
    },
    ...vue.configs['flat/recommended'],

    {
        files: ['**/*.ts', '**/*.vue'],

        languageOptions: {
        parserOptions: {
            parser: tsParser,
            ecmaVersion: 2022,
            sourceType: 'module',
            ecmaFeatures: {
            jsx: true,
            },
            extraFileExtensions: ['.vue'],
            tsconfigRootDir: __dirname,
        }, 
        globals: {
            ...globals.browser,
            ...globals.node,
        },
        },

        plugins: {
            '@typescript-eslint': typescriptEslint,
            'vue': vue,
            prettier: prettierPlugin,
        },

        rules: {
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',

        'vue/multi-word-component-names': 'off',
        'vue/require-default-prop': 'off',
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/html-self-closing': [
            'error',
            {
            html: {
                void: 'always',
                normal: 'never',
                component: 'always',
            },
            },
        ],

        'prettier/prettier': ['error', {
            'tabWidth': 2
        }],

        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-debugger': 'error',
        'prefer-const': 'error',
        },
    },
];