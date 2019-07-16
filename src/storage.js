"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aws_sdk_1 = require("aws-sdk");
var Storage = /** @class */ (function () {
    function Storage() {
        this.store = new aws_sdk_1.S3();
        this.aws_config = new aws_sdk_1.Config();
    }
    return Storage;
}());
exports.default = Storage;
