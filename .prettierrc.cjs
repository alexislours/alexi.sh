module.exports = {
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  semi: true,
  arrowParens: "always",
  trailingComma: "es5",
  bracketSameLine: true,
  printWidth: 80,
  bracketSpacing: true,
  singleAttributePerLine: true,
  endOfLine: "auto",
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
