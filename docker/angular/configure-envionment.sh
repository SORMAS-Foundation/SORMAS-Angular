#!/usr/bin/env sh

configurationPath="/usr/share/nginx/html/assets/environment.json"

if [ -f $configurationPath ]; then
  rm $configurationPath;
fi

cat <<EOT >> $configurationPath
{
  "keycloakRealm": "$KEYCLOAK_REALM",
  "keycloakClientId": "$KEYCLOAK_CLIENT_ID",
  "keycloakUrl": "$KEYCLOAK_URL",
  "apiUrl": "$SORMAS_REST_API_URL"
}
EOT

exit 0
