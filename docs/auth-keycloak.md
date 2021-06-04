## Auth with Keycloak

Login on your Keycloak installation.

#### Angular Client:

Set up a new Keycloak client:

Client ID: `sormas-angular-prod`

Client Protocol: `openid-connect`

Root URL: `http://localhost:8200/` - or your desired URL where Sormas Angular runs

Check `environment.prod.ts` and make sure this matches your Keycloak urls, realm and API URL

#### Second client for local Angular development (optional):

Client ID: `sormas-angular`

Client Protocol: `openid-connect`

Root URL: `http://localhost:4200/`

### For Local development

If running the applications with `docker-compose up`:
Go to `http://localhost:8400/keycloak/auth/admin` and use `admin` & `password` to log in.

To get Keycloak configured:
Steps

- Create a user with username `SurvOff` and make sure `UserEnabled` & `EmailVerified` are checked.
- In tab 'Role Mappings' of the new user make sure `REST_EXTERNAL_VISITS_USER` & `REST_USER` are selected
- Create 2 clients for the Angular app (from the Keycloak Admin Clients section):
