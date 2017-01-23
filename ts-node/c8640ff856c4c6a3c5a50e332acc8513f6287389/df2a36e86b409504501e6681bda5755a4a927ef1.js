"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var path_1 = require('path');
var seed_config_1 = require('./seed.config');
var ProjectConfig = (function (_super) {
    __extends(ProjectConfig, _super);
    function ProjectConfig() {
        _super.call(this);
        this.PROJECT_TASKS_DIR = path_1.join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
        this.FONTS_DEST = this.APP_DEST + "/fonts";
        this.FONTS_SRC = [
            'node_modules/font-awesome/fonts/**'
        ];
        this.NPM_DEPENDENCIES = this.NPM_DEPENDENCIES.concat([
            { src: 'font-awesome/css/font-awesome.css', inject: true },
            { src: 'jquery/dist/jquery.min.js', inject: 'libs' },
            { src: 'highcharts/highcharts.js', inject: 'libs' }
        ]);
        this.APP_ASSETS = this.APP_ASSETS.concat([
            { src: this.CSS_SRC + "/app.css", inject: true, vendor: false }
        ]);
    }
    return ProjectConfig;
}(seed_config_1.SeedConfig));
exports.ProjectConfig = ProjectConfig;
//# sourceMappingURL=/var/www/html/s3b4a2/ts-node/c8640ff856c4c6a3c5a50e332acc8513f6287389/df2a36e86b409504501e6681bda5755a4a927ef1.js.map