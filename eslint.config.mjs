import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended
  {
    plugins: {
      react: pluginReact
    }
  },
  {
    rules: {
      "react/jsx-uses-vars": "error", // 修复'React' must be in scope when using JSX
      "react/jsx-uses-react": "error", // 修复'React' must be in scope when using JSX
      "react/react-in-jsx-scope": "off" // 关闭 React 作用域检查
      // "react/jsx-runtime": "error" // 启用 JSX 运行时自动导入
    }
  }
]);
