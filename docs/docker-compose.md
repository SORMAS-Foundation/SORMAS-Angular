## Docker Compose

This approach helps you spin off a local backend environment using docker.
**Please note: this approach is for local development only!**

1. You will first need to add the following to your hosts file: `127.0.0.1 sormas-docker-test.com`
2. On Windows ensure the local git repository is set to not replace line endings with
   `git config core.autocrlf input` and ` git config core.eol lf`
3. On Windows ensure your IDE is set to use LF for line endings instead of the default CRLF
4. Make any changes you need for passwords and configurations in the `.env` file
5. Ensure the correct ip / hostname is set on the `extra_host` for the
6. Run `docker-compose up -d`
7. Wait the sormas app to start...
8. Run `/opt/payara5/bin/asadmin --port 6048 deploy --force /opt/domains/sormas/deployments/sormas-rest.war` In the `sormas` container
   i.e. `docker exec sormas-angular_sormas_1 /opt/payara5/bin/asadmin --port 6048 deploy --force /opt/domains/sormas/deployments/sormas-rest.war`
9. Go to https://sormas-docker-test.com/keycloak/auth and login with the credentials you set in the `.env` file
10. Create a new client with the client id: `sormas-angular` and the root url `https://sormas-docker-test.com/sormas-angular/`

## Links:

| App Name           | Url                                                  |
| ------------------ | ----------------------------------------------       |
| Sormas Application | https://sormas-docker-test.com/sormas-ui/login       |
| Sormas REST API    | https://sormas-docker-test.com/sormas-rest/          |
| Sormas Angular     | https://sormas-docker-test.com/sormas-angular/en-US/ |
| Sormas Postgres    | 127.0.0.1:8300                                       |
| Keycloak           | https://sormas-docker-test.com/keycloak              |
| Keycloak Postgres  | 127.0.0.1:8401                                       |

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
