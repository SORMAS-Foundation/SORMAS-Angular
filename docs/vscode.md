## VSCode

### VSCode Extensions

Search in VS Code extensions library and install:

- Angular Language Service
- Angular Schematics
- ESLint
- Prettier
- stylelint
- TSLint

### Settings

Add those to the VS Code settings JSON if you want to have the exact Editor config as the rest of the developers:

```json
{
  "typescript.updateImportsOnFileMove.enabled": "always",
  "editor.detectIndentation": true,
  "typescript.preferences.importModuleSpecifier": "relative",
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": ["javascript", "typescript", "html"],
  "eslint.options": {
    "extensions": [".js", ".ts", "html"]
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.formatOnSave": true
}
```
