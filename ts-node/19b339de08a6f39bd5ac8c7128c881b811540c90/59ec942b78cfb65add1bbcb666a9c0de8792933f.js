"use strict";
var gulpLoadPlugins = require('gulp-load-plugins');
var path_1 = require('path');
var config_1 = require('../../config');
var plugins = gulpLoadPlugins();
var tsProjects = {};
function makeTsProject(options) {
    if (options === void 0) { options = {}; }
    var optionsHash = JSON.stringify(options);
    if (!tsProjects[optionsHash]) {
        var config = Object.assign({
            typescript: require('typescript')
        }, options);
        tsProjects[optionsHash] =
            plugins.typescript.createProject(path_1.join(config_1.default.APP_SRC, 'tsconfig.json'), config);
    }
    return tsProjects[optionsHash];
}
exports.makeTsProject = makeTsProject;
//# sourceMappingURL=/var/www/html/angularjs/admin/ts-node/19b339de08a6f39bd5ac8c7128c881b811540c90/59ec942b78cfb65add1bbcb666a9c0de8792933f.js.map