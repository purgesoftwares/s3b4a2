"use strict";
var util = require('gulp-util');
var yargs_1 = require('yargs');
var path_1 = require('path');
var config_1 = require('../../config');
var getConfig = function (path, env) {
    var configPath = path_1.join(path, env);
    var config;
    try {
        config = require(configPath);
    }
    catch (e) {
        config = null;
        util.log(util.colors.red(e.message));
    }
    return config;
};
function templateLocals() {
    var configEnvName = yargs_1.argv['config-env'] || 'dev';
    var configPath = config_1.default.getPluginConfig('environment-config');
    var baseConfig = getConfig(configPath, 'base');
    var config = getConfig(configPath, configEnvName);
    if (!config) {
        throw new Error('Invalid configuration name');
    }
    return Object.assign(config_1.default, {
        ENV_CONFIG: JSON.stringify(Object.assign(baseConfig, config))
    });
}
exports.templateLocals = templateLocals;
//# sourceMappingURL=/var/www/html/SB-Admin-BS4-Angular-2/ts-node/96e2e0fecd14076ad7bdd260b310c6d99a515dd9/753ce314a7f462ebdfd70420fa189781ba412344.js.map