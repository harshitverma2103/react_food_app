module.exports = {
     env: {
       browser: true,
       es2021: true,
     },
     extends: [
       'eslint:recommended',
       'plugin:react/recommended',
       'plugin:react-hooks/recommended',
       'plugin:jsx-a11y/recommended',
       'plugin:import/errors',
       'plugin:import/warnings',
       'plugin:import/react',
       'airbnb',
     ],
     parserOptions: {
       ecmaFeatures: {
         jsx: true,
       },
       ecmaVersion: 12,
       sourceType: 'module',
     },
     plugins: [
       'react',
       'react-hooks',
       'jsx-a11y',
       'import',
     ],
     rules: {
       'react/react-in-jsx-scope': 'off',
       'react/prop-types': 'off',
       'import/prefer-default-export': 'off',
       'jsx-a11y/anchor-is-valid': 'off',
     },
     settings: {
       react: {
         version: 'detect',
       },
       'import/resolver': {
         node: {
           extensions: ['.js', '.jsx', '.ts', '.tsx'],
         },
       },
     },
   };
   