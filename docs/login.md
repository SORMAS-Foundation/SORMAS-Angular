## Login

There are two modes for log-in using the new Angular application:

- Keycloak - for production
- Legacy Login (for dev only) - using a Node.js proxy - see `proxy-server.js`

### Login configuration

For auth using Keycloak see `auth-keycloak.md`.

### Legacy login - aka using Basic Auth

This approach is only for local development. It let's you connect the Angular application to any valid Sormas backend that supports Basic Auth.

For configuration see `SORMAS-Angular/projects/api-proxy/.env` to configure your desired BE server.
Check `environment.ts` and set:

- `isLegacyLogin` to `true`.
- `apiUrl` - the URL of your local running proxy - see `SORMAS-Angular/projects/api-proxy/.env` - default is `http://localhost:4201`
- `production` - needs to be set to false
