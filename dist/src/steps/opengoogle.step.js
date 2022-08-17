"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenGoogleSteps = void 0;
const chai_1 = require("chai");
const cucumber_tsflow_1 = require("cucumber-tsflow");
const open_1 = __importDefault(require("open"));
let OpenGoogleSteps = class OpenGoogleSteps {
    url;
    givenUserOpenUrl(url) {
        console.log(url);
        this.url = url;
    }
    urlIsString() {
        chai_1.assert.isString(this.url, "url is not string");
    }
    openUrlInBrowser() {
        (0, open_1.default)(this.url, { app: [{ name: 'chrome' }] });
    }
};
__decorate([
    (0, cucumber_tsflow_1.given)('a user opens {string}'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OpenGoogleSteps.prototype, "givenUserOpenUrl", null);
__decorate([
    (0, cucumber_tsflow_1.when)('url is string'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpenGoogleSteps.prototype, "urlIsString", null);
__decorate([
    (0, cucumber_tsflow_1.then)('open url in browser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpenGoogleSteps.prototype, "openUrlInBrowser", null);
OpenGoogleSteps = __decorate([
    (0, cucumber_tsflow_1.binding)()
], OpenGoogleSteps);
exports.OpenGoogleSteps = OpenGoogleSteps;
//# sourceMappingURL=opengoogle.step.js.map