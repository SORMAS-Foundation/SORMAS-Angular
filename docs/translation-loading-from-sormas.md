## Translations loading from Sormas-Project

In the Dockerfile for this project we have an image definition named `translations-handler` in which the NodeJs script
located at `docker/translations/` is executed.

The current process of loading translations is as follows:
1. Checkout the `sormas-api/src/main/resources/` folder from the `development` branch of the `Sormas-Project`
2. Copy our own custom translations from `src/assets/i18n/custom-translations.json`
3. Execute the `convertTranlations.ts` script
    - this will load all the translations it finds in the checked out folder from the `Sormas-Project`
    - it will then apply all the translations from our own `custom-translations.json` file in the situation where they
    do not exist already in the `Sormas-Project`
4. Dump the translations as `.json` files in the container at the path `/opt/translations/dist`

In order to load these translations on the local environment the following commands must be run:
1. `docker build . --target translations-handler -t sormas-translations`
    - this will build the `translations-handler` image and name it `sormas-translations`
2. `docker create sormas-translations`
    - this will create a container in docker using the image `sormas-translations` without running the container
    - the output of this command is a container ID that will be used in the next command
3. `docker cp {container-ID-from-from-the-docker-create-command}:/opt/translations/dist src/assets/i18n/`
    - this will copy the `/opt/translations/dist` folder from the container into the local machine on the path specified
    - an example of this command would be:

`docker cp b194b605b2942e0f5c6151c1d4711d8d7405421537b01895eaeb845e60b42572:/opt/translations/dist src/assets/i18n/`
