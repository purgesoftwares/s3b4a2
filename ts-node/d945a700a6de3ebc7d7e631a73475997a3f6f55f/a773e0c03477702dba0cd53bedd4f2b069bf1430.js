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
//# sourceMappingURL=/var/www/html/s3b4a2/ts-node/d945a700a6de3ebc7d7e631a73475997a3f6f55f/a773e0c03477702dba0cd53bedd4f2b069bf1430.js.map