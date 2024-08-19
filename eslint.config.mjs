import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ['node_modules/', '*.min.js', 'scripts/', 'babel.config.js'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['node_modules/', 'build/'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
