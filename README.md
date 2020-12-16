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
- [x] Localization
- [ ] Table component
- [ ] Integrate CSS FW / Component lib
- [ ] Other basic components?
- [ ] Tests
- [ ] VSCode Setup & extensions used - document

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Check the app

[![Netlify Status](https://api.netlify.com/api/v1/badges/438ae622-8eac-4dfd-be4a-240ca127430d/deploy-status)](https://app.netlify.com/sites/sormas-angular-setup/deploys)
