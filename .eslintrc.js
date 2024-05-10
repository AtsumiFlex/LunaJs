/** @type {import("eslint").Linter.Config} */
module.exports = {
	ignorePatterns: ["apps/**", "config/**", "packages/**"],
	extends: ["@aurajs/eslint-config/node"],
	parserOptions: { project: true },
};
