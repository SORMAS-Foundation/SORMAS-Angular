# SORMAS-Angular

## Technical setup - checklist:

- [ ] RBAC - should be easy to do based on the roles of the user
- [ ] E2E tests setup & run them in CI
- [ ] CD pipeline - after CI is passing create a CD pipeline to deploy the applications for easy testing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Local dev setup

### Prerequisites:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/get-docker/)
- Angular CLI: `npm install -g @angular/cli`

## Install dependencies

Run `npm i`
Run `npm run build`
Run `cd ./projects/api-proxy & npm i`

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

You can start the app in a different language using:
Ex: `npm run start:de`

> Note: Keycloak is required to run the app - [see below](https://github.com/hzi-braunschweig/SORMAS-Angular#auth-with-keycloak)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
