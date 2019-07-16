"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var credentials_1 = require("aws-sdk/lib/credentials");
var config_1 = __importDefault(require("config"));
var AWSCredentials = /** @class */ (function (_super) {
    __extends(AWSCredentials, _super);
    function AWSCredentials(opts) {
        if (opts === void 0) { opts = config_1.default.get('aws'); }
        return _super.call(this, opts) || this;
    }
    return AWSCredentials;
}(credentials_1.Credentials));
exports.default = AWSCredentials;
