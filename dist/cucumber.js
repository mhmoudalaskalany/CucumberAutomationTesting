// cucumber.js
let common = [
    'src/features/**/*.feature',
    '--require-module ts-node/register',
    '--require src/steps/**/*.ts',
    '--format progress-bar',
    '--format node_modules/@cucumber/pretty-formatter' // Load custom formatter
].join(' ');
module.exports = {
    default: common
};
//# sourceMappingURL=cucumber.js.map