/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const fs = require("fs-extra");
const yaml = require("js-yaml");
const flatten = require('flat')

exports.onPreBootstrap = () => {
  console.log("Copying locales");

  const deTranslation = loadTranslationObject("de");
  const enTranslation = loadTranslationObject("en");

  // Create directory structure
  fs.existsSync(path.join(__dirname, "/public/intl")) || fs.mkdirSync(path.join(__dirname, "/public/intl"));

  // Save bundled translation files
  fs.writeFileSync(path.join(__dirname, "/public/intl/de.json"), JSON.stringify(flatten(deTranslation)));
  fs.writeFileSync(path.join(__dirname, "/public/intl/en.json"), JSON.stringify(flatten(enTranslation)));
};

exports.onCreateWebpackConfig = ({
                                   actions //, stage, getConfig, rules, loaders,
                                 }) => {
  actions.setWebpackConfig({
    externals: ['canvas'],
  });
};

function loadTranslationObject(languageCode) {
  const srcPath = path.join(__dirname, `/src/intl/${languageCode}/`);
  const translationObjects = fs.readdirSync(srcPath).map(file => (
    yaml.load(fs.readFileSync(path.join(srcPath, file)), {encoding: "utf-8"})
  ));
  return Object.assign({}, ...translationObjects)
}
