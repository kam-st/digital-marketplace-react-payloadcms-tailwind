module.exports = {
  root: true,
  extends: ['plugin:tailwindcss/recommended', 'next/core-web-vitals'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
