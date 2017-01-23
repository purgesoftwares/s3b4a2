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
//# sourceMappingURL=/var/www/html/s3b4a2/ts-node/c8640ff856c4c6a3c5a50e332acc8513f6287389/b626622daff044495b4f2a2a2663821c895d262f.js.map