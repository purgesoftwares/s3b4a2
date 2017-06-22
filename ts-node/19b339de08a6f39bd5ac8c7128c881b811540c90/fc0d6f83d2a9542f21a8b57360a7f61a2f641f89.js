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
//# sourceMappingURL=/var/www/html/angularjs/admin/ts-node/19b339de08a6f39bd5ac8c7128c881b811540c90/fc0d6f83d2a9542f21a8b57360a7f61a2f641f89.js.map