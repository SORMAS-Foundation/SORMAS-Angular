## Docker Compose

This approach helps you spin off a local backend environment using docker.
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
