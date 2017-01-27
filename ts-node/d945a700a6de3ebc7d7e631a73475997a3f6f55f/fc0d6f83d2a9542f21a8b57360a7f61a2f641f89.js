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
//# sourceMappingURL=/var/www/html/s3b4a2/ts-node/d945a700a6de3ebc7d7e631a73475997a3f6f55f/fc0d6f83d2a9542f21a8b57360a7f61a2f641f89.js.map