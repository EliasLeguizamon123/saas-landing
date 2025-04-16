import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        plugins: { js },
        extends: ["js/recommended"],
        settings: {
            react: {
                version: "detect", // Detecta automáticamente la versión de React instalada
            },
        },
        rules: {
            "indent": ["error", 4], // Indentación de 4 espacios para JS
            "react/jsx-indent": ["error", 4], // Indentación de 4 espacios para JSX
            "react/jsx-indent-props": ["error", 4], // Indentación de 4 espacios para props en JSX
            "react/react-in-jsx-scope": "off", // Desactivar la necesidad de importar React
            // Cambiar la regla de no-unused-vars a "warn"
            "no-unused-vars": ["warn", { 
                args: "none",  // No marca error en los parámetros no utilizados
                vars: "local", // No marca error en las variables no utilizadas
                ignoreRestSiblings: true,  // Permite que la desestructuración sea ignorada
            }],
            // Asegurarse de que no hay otras reglas que sobrescriban "no-unused-vars"
            "react/jsx-no-undef": ["error", { "allowGlobals": true }],
            "@typescript-eslint/no-unused-vars": ["warn", { 
                args: "none", 
                vars: "local", 
                ignoreRestSiblings: true 
            }],
        },
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
]);
