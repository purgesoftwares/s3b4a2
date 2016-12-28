"use strict";
var browserSync = require('browser-sync');
var config_1 = require('../../config');
var runServer = function () {
    browserSync.init(config_1.default.getPluginConfig('browser-sync'));
};
var listen = function () {
    runServer();
};
exports.listen = listen;
var changed = function (files) {
    if (!(files instanceof Array)) {
        files = [files];
    }
    browserSync.reload(files);
};
exports.changed = changed;
//# sourceMappingURL=/var/www/html/SB-Admin-BS4-Angular-2/ts-node/96e2e0fecd14076ad7bdd260b310c6d99a515dd9/fc0d6f83d2a9542f21a8b57360a7f61a2f641f89.js.map