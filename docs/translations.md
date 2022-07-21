# Translations

When working with translations, the developer needs first to check the en.json file to see if the needed label is already in the old translations.
If the label is not in the old translations and needs to be added these are the steps.
Run these steps in the root path of the project:

1). add translation in custom-translations.json

2). docker build . --target translations-handler -t sormas-translations --no-cache

3). docker create sormas-translations

4). docker cp THE_ID_FROM_STEP_2:/opt/translations/dist src/assets/i18n/

!!! NEVER ADD DIRECTLY IN en.json
