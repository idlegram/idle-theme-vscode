const ts = require("typescript-eslint");

module.exports = [
  {
    ignores: ["node_modules", "dist", "build"],
  },
  ...ts.configs.recommended.map((config) => ({
    ...config,
    files: ["**/*.ts"],
  })),
];
