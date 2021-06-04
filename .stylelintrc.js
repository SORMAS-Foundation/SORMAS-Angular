module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-idiomatic-order',
    'stylelint-a11y/recommended',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'selector-type-no-unknown': null,
  },
  ignoreFiles: ['src/assets/**/*.css'],
};
