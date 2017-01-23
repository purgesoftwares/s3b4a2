"use strict";
var gulp = require('gulp');
var path_1 = require('path');
var config_1 = require('../../config');
module.exports = function () {
    var paths = [
        path_1.join(config_1.default.APP_SRC, '**'),
        '!' + path_1.join(config_1.default.APP_SRC, '**', '*.ts'),
        '!' + path_1.join(config_1.default.APP_SRC, '**', '*.scss')
    ].concat(config_1.default.TEMP_FILES.map(function (p) { return '!' + p; }));
    return gulp.src(paths)
        .pipe(gulp.dest(config_1.default.APP_DEST));
};
//# sourceMappingURL=/var/www/html/s3b4a2/ts-node/c8640ff856c4c6a3c5a50e332acc8513f6287389/babf1ff537c0cea8b66ee17fe0bfe72a9f417c03.js.map