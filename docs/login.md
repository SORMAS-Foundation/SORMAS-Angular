## Login

There are two modes for log-in using the new Angular application:

- Keycloak - for production
- Legacy Login (for dev only) - using a Node.js proxy - see `proxy-server.js`

### Login configuration

For auth using Keycloak see `auth-keycloak.md`.

### Legacy login - aka using Basic Auth

**Legacy login is currently not working: https://github.com/hzi-braunschweig/SORMAS-Project/issues/10019**

This approach is only for local development. It let's you connect the Angular application to any valid Sormas backend that supports Basic Auth.

For configuration see `SORMAS-Angular/projects/api-proxy/.env` to configure your desired BE server.
Check `environment.ts` and set:

- `isLegacyLogin` to `true`.
- `apiUrl` - the URL of your local running proxy - see `SORMAS-Angular/projects/api-proxy/.env` - default is `http://localhost:4201`
- `production` - needs to be set to false

`proxy-server.js` uses a simple built-in cookie sessions handling that is good enough for local development.
To improve this you can migrate this approach you can look at:
[express-session](https://github.com/expressjs/session#readme)
