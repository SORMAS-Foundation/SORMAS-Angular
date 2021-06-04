## Docker build for Angular app

> Note: using the `docker-compose` approach is recommanded for local development as it also spawns containers for the apps external dependencies (Auth Server, API).

You can build a docker image of the application with:

`docker build -t angular-app .`

Run it:
`docker run --name angular-app -d -p 4200:80 angular-app`

Should be able to navigate to:

- `http://localhost:4200/de/`
- `http://localhost:4200/en-US/`
- `http://localhost:4200/fr/`

> Note: Keycloak is required to run the app - [see](https://github.com/hzi-braunschweig/SORMAS-Angular#auth-with-keycloak)
