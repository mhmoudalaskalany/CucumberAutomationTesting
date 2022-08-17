// cucumber.js
let common = [
    'src/features/**/*.feature',                // Specify our feature files
    '--require-module ts-node/register',    // Load TypeScript module
    '--require src/steps/**/*.ts',   // Load step definitions
    '--format progress-bar',                // Load custom formatter
    '--format node_modules/@cucumber/pretty-formatter' // Load custom formatter
  ].join(' ');
  
  module.exports = {
    default: common
  };