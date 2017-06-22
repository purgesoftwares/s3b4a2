"use strict";
var gulp = require('gulp');
var config_1 = require('../../config');
module.exports = function () {
    return gulp.src(config_1.default.FONTS_SRC)
        .pipe(gulp.dest(config_1.default.FONTS_DEST));
};
//# sourceMappingURL=/var/www/html/admin/ts-node/64b79945d5f3c0aca5f4a7519b8b0dace0792fbc/f24bbc3c7c8e97aebb571bd38f1b254efb5e9629.js.map