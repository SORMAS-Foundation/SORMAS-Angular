const propertiesReader = require('properties-reader');
const path = require('path');
const fs = require('fs');

const languages: string[] = [
    'ar', 'cs-CZ', 'de-CH', 'de-DE', 'en-AF', 'en-GH', 'en-NG', 'en', 'es-CU', 'es-EC', 'es-ES', 'fa-AF', 'fi-FI',
    'fil-PH', 'fj-FJ', 'fr-CH', 'fr-FR', 'haw-US', 'hi-IN', 'hr-HR', 'it-CH', 'it-IT', 'ja-JP', 'ks-PK', 'ku-TR',
    'la-LA', 'mt-MT', 'nl-NL', 'no-NO', 'pl-PL', 'ps-AF', 'pt-PT', 'ro-RO', 'ru-RU', 'sv-SE', 'sw-KE', 'tr-TR',
    'uk-UA', 'ur-PK', 'zh-CN', 'zu-ZA'
];

const outputDirectory = path.join('dist');

const languageFiles: { [key: string]: string[] } = {};
const translations: { [key: string]: { [key: string]: string[] } } = {};

const customTranslation = JSON.parse(fs.readFileSync('custom-translations.json'));

fs.readdir(__dirname, (error: NodeJS.ErrnoException | null, files: string[]) => {
    if (error) {
        console.log(error);
        throw error;
    }
    files.forEach((file: string) => {
        if (file.indexOf('_') < 0 && file.indexOf('.properties') > -1) {
            if (!languageFiles.en) {
                languageFiles.en = [];
            }
            languageFiles.en.push(file);
        }
        let found = false;
        languages.forEach((language: string) => {
            // console.log(language);
            if (file.indexOf(`${language}.properties`) > -1) {
                if (!languageFiles[language]) {
                    languageFiles[language] = [];
                }
                found = true;
                languageFiles[language].push(file);
            }
        });
        if (!found) {
            console.log(`No matching language found for file: ${file}`)
        }
    });
    console.log('Language files found:');
    console.log(JSON.stringify(languageFiles));

    languages.forEach((language: string) => {
        languageFiles[language].forEach((languageFile: string) => {
            const translationDomain = languageFile.replace('.properties', '').replace(language, '').replace('_', '');
            const properties = propertiesReader(languageFile);
            console.log(`Language file: ${languageFile} - translationDomain ${translationDomain}`);
            if (!translations[language]) {
                translations[language] = {};
            }

            if (!translations[language][translationDomain]) {
                // @ts-ignore
                translations[language][translationDomain] = {};
            }

            translations[language][translationDomain] = {
                ...translations[language][translationDomain], ...properties.getAllProperties()
            };
        });
        Object.keys(customTranslation).forEach((translationLabel: string) => {
            if (!translations[language][translationLabel]) {
                translations[language][translationLabel] = customTranslation[translationLabel];
            }
        });

        fs.writeFileSync(`${outputDirectory}/${language}.json`, JSON.stringify(translations[language]));
    });
});
