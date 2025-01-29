import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/jsx-no-undef": "off", // Disable errors for undefined JSX components
      "no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_", // Ignore variables prefixed with _
          argsIgnorePattern: "^_", // Ignore function arguments prefixed with _
          destructuredArrayIgnorePattern: "^_", // Ignore destructured variables prefixed with _
        },
      ],
      "react/no-unused-prop-types": "off", // Prevent errors for unused props
      "react/no-unused-state": "off", // Prevent errors for unused state
    },
  },
];

export default eslintConfig;
