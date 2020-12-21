# Sormas

## Angular technical setup WIP:

- [x] modules structure example (root, shared, feature module - dashboard, tasks)
- [x] ESLint
- [x] Prettier
- [x] style lint
- [x] a11y checks - stylelint and tslint for templates
- [x] pre-commit hooks
- [x] map example with Leaflet
- [x] lazy loaded feature modules - Ex Tasks
- [x] HTTP service example
- [x] Docker example
- [x] Localization - default Angular i18n
- [ ] Localization - deployment with language switch
- [ ] Forms / dynamic forms / form validation & submission
- [ ] Integrate CSS FW / Component lib
- [ ] Tests
- [x] VSCode Setup & extensions used - document
- [ ] Explore Localization option 2 - transloco (check compat with crowdin app)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## i18n

Install ngx-i18nsupport: `npm install -g ngx-i18nsupport`
Generate localization data: `npm run extract-i18n`
It will generate locale data for all languages specified in `xliffmerge.json` in the `./src/locale` folder.

Notes:

- xliffmerge.json can be configured with "autotranslate": true, provided a Google translate API key is provided
- Tiny translator tool can be used to translate to other languages (avoid directly modifying the `.xls` files). Run it locally with docker: `docker run -d -it --rm -p4000:80 martinroob/tiny-translator:latest` or use it directly from [here](https://martinroob.github.io/tiny-translator/en/#/home).
- Run `npm start:fr` or `npm start:de` to launch the app in a certain language.

For more info on Angular's i18n features read [here](https://angular.io/guide/i18n).

The Crowdin app used for Sormas-Project supports `.xlf` files.
https://support.crowdin.com/supported-formats/

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Docker

`docker build -t angular-app .`
`docker run --name angular-app -d -p 5001:80 angular-app`

## Check the app

[![Netlify Status](https://api.netlify.com/api/v1/badges/438ae622-8eac-4dfd-be4a-240ca127430d/deploy-status)](https://app.netlify.com/sites/sormas-angular-setup/deploys)

## Local dev setup

Install [Node.js](https://nodejs.org/en/)

Install the Angular CLI: `npm install -g @angular/cli`

Run `npm i` in the project root to install the preject dependencies.

### VS Code Extensions

Search in VS Code extensions library and install:

- Angular Language Service
- Angular Schematics
- ESLint
- Prettier
- stylelint
- TSLint

### VS Code

Add those to the VS Code settings JSON:

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
