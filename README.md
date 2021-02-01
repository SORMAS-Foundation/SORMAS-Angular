# SORMAS-Angular

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
- [x] Localization - deployment with language switch
- [x] Auth - Keycloak integration
- [ ] RBAC
- [x] State management - keep it simple - use singleton services for now
- [x] Forms / dynamic forms / form validation & submission (help welcome)
- [x] Integrate CSS FW / Component lib
- [x] Common components - Table, Modal, Dropdown (used from Angular Material)
- [x] Integrate with Sormas Keycloak & Sormas API backend (help welcome - BE)
- [ ] Unit Tests run on CI
- [ ] E2E tests setup (maybe Cypress) & run in CI
- [ ] CD pipeline - after CI is passing create a CD pipeline to deploy the applications for easy testing
- [x] Local dev setup & VS Code extensions used - document

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Local dev setup

### Prerequisites:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/get-docker/)
- Angular CLI: `npm install -g @angular/cli`

## Install dependencies

Run `npm i`
Go to `cd ./projects/api-proxy & npm i`

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

## Docker Compose

**Please note: this approach is for local development only!**

1. You will first need to add the following to your hosts file: `127.0.0.1 sormas-docker-test.com`
2. On Windows ensure the local git repository is set to not replace line endings with
   `git config core.autocrlf input` and ` git config core.eol lf`
3. On Windows ensure your IDE is set to use LF for line endings instead of the default CRLF
4. Update the `.env` file with your own `LOCAL_IPV4_ADDRESS`.

To run the environment please use: `docker-compose up`

## Links:

| App Name           | Url                                            |
| ------------------ | ---------------------------------------------- |
| Sormas Application | https://sormas-docker-test.com/sormas-ui/login |
| Sormas REST API    | https://sormas-docker-test.com/sormas-rest/    |
| Sormas Angular     | http://localhost:8200                          |
| Sormas Postgres    | 127.0.0.1:8300                                 |
| Keycloak           | https://sormas-docker-test.com/keycloak        |
| Keycloak Postgres  | 127.0.0.1:8401                                 |

| App Name           | Url                                   |
| ------------------ | ------------------------------------- |
| Sormas Application | http://localhost:8100/sormas-ui/login |
| Sormas Angular     | http://localhost:8200/                |
| Sormas Postgres    | 127.0.0.1:8300                        |
| Keycloak           | http://localhost:8400                 |
| Keycloak Postgres  | 127.0.0.1:8401                        |

On Windows, make sure the `docker` folder in the project is added to the Docker File Sharing as per the instructions [here](https://docs.docker.com/docker-for-windows/)

To connect to the Postgres databases you can use your preferred IDE or from the cli with
`psql -h 127.0.0.1 -p 8401 -U keycloak` and
`psql -h 127.0.0.1 -p 8300 -U sormas_user`

When prompted for the password you will need to enter the one you set in the .env file

## Auth with Keycloak

After running the applications with `docker-compose up`, go to:
Go to `http://localhost:8400/keycloak/auth/admin` and use `admin` & `password` to log in.

To get Keycloak configured:
See more: https://www.keycloak.org/getting-started/getting-started-docker
Steps

- Create a user with username `SurvOff` and make sure `UserEnabled` & `EmailVerified` are checked.
- In tab 'Role Mappings' of the new user make sure `REST_EXTERNAL_VISITS_USER` & `REST_USER` are selected
- Create 2 clients for the Angular app (from the Keycloak Admin Clients section):

#### Angular Client:

Client ID: `sormas-angular-prod`

Client Protocol: `openid-connect`

Root URL: `http://localhost:8200/`

#### Second client for local Angular development (optional):

Client ID: `sormas-angular`

Client Protocol: `openid-connect`

Root URL: `http://localhost:4200/`
