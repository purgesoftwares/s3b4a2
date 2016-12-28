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
//# sourceMappingURL=/var/www/html/SB-Admin-BS4-Angular-2/ts-node/96e2e0fecd14076ad7bdd260b310c6d99a515dd9/babf1ff537c0cea8b66ee17fe0bfe72a9f417c03.js.map