"use strict";
var util = require('gulp-util');
var rimraf = require('rimraf');
function clean(paths) {
    return function (done) {
        var pathsToClean;
        if (paths instanceof Array) {
            pathsToClean = paths;
        }
        else {
            pathsToClean = [paths];
        }
        var promises = pathsToClean.map(function (p) {
            return new Promise(function (resolve) {
                rimraf(p, function (e) {
                    if (e) {
                        util.log('Clean task failed with', e);
                    }
                    else {
                        util.log('Deleted', util.colors.yellow(p || '-'));
                    }
                    resolve();
                });
            });
        });
        Promise.all(promises).then(function () { return done(); });
    };
}
exports.clean = clean;
//# sourceMappingURL=/var/www/html/angularjs/admin/ts-node/19b339de08a6f39bd5ac8c7128c881b811540c90/a773e0c03477702dba0cd53bedd4f2b069bf1430.js.map