"use strict";
var gulpLoadPlugins = require('gulp-load-plugins');
var path_1 = require('path');
var runSequence = require('run-sequence');
var config_1 = require('../../config');
var utils_1 = require('../../utils');
var plugins = gulpLoadPlugins();
function watch(taskname) {
    return function () {
        var paths = [
            path_1.join(config_1.default.APP_SRC, '**')
        ].concat(config_1.default.TEMP_FILES.map(function (p) { return '!' + p; }));
        plugins.watch(paths, function (e) {
            return runSequence(taskname, function () { return utils_1.notifyLiveReload(e); });
        });
    };
}
exports.watch = watch;
//# sourceMappingURL=/var/www/html/angularjs/admin/ts-node/19b339de08a6f39bd5ac8c7128c881b811540c90/b626622daff044495b4f2a2a2663821c895d262f.js.map