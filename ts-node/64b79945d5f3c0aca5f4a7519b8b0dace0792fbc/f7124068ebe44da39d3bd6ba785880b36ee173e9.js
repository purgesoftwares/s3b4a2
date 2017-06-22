"use strict";
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var path_1 = require('path');
var config_1 = require('../../config');
var plugins = gulpLoadPlugins();
module.exports = function () {
    var src = [
        path_1.join(config_1.default.APP_SRC, '**/*.ts'),
        '!' + path_1.join(config_1.default.APP_SRC, '**/*.d.ts'),
        path_1.join(config_1.default.TOOLS_DIR, '**/*.ts'),
        '!' + path_1.join(config_1.default.TOOLS_DIR, '**/*.d.ts')
    ];
    return gulp.src(src)
        .pipe(plugins.tslint({
        rulesDirectory: config_1.default.CODELYZER_RULES
    }))
        .pipe(plugins.tslint.report({
        emitError: require('is-ci')
    }));
};
//# sourceMappingURL=/var/www/html/admin/ts-node/64b79945d5f3c0aca5f4a7519b8b0dace0792fbc/f7124068ebe44da39d3bd6ba785880b36ee173e9.js.map