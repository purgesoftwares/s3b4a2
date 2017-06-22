"use strict";
var gulp = require('gulp');
var config_1 = require('../../config');
module.exports = function () {
    return gulp.src(config_1.default.FONTS_SRC)
        .pipe(gulp.dest(config_1.default.FONTS_DEST));
};
//# sourceMappingURL=/var/www/html/angularjs/admin/ts-node/19b339de08a6f39bd5ac8c7128c881b811540c90/f24bbc3c7c8e97aebb571bd38f1b254efb5e9629.js.map