module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:@next/next/recommended',
      'plugin:tailwindcss/recommended',
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    ignorePatterns: ['dist/', 'node_modules/'],  // Ignore build and node_modules folder
    rules: {
      // Custom rules
      'no-console': 'warn',             // Warn for console.log statements
      'react/prop-types': 'off',        // Disable prop-types since you're using TypeScript or prefer not to enforce
      'jsx-a11y/anchor-is-valid': 'off', // Disable valid anchor tag requirement for Next.js links
      'tailwindcss/no-custom-classname': 'off',  // Allow custom class names in Tailwind
    },
  };
  