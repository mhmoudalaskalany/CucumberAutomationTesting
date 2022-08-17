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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountSteps = void 0;
const cucumber_tsflow_1 = require("cucumber-tsflow");
const chai_1 = require("chai");
let BankAccountSteps = class BankAccountSteps {
    accountBalance = 0;
    givenAnAccountWithStartingBalance(amount) {
        this.accountBalance = amount;
    }
    deposit(amount) {
        this.accountBalance = Number(this.accountBalance) + Number(amount);
    }
    accountBalanceShouldEqual(expectedAmount) {
        chai_1.assert.equal(this.accountBalance, expectedAmount);
    }
};
__decorate([
    (0, cucumber_tsflow_1.given)(/A bank account with starting balance of \$(\d*)/),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BankAccountSteps.prototype, "givenAnAccountWithStartingBalance", null);
__decorate([
    (0, cucumber_tsflow_1.when)(/\$(\d*) is deposited/),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BankAccountSteps.prototype, "deposit", null);
__decorate([
    (0, cucumber_tsflow_1.then)(/The bank account balance should be \$(\d*)/),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BankAccountSteps.prototype, "accountBalanceShouldEqual", null);
BankAccountSteps = __decorate([
    (0, cucumber_tsflow_1.binding)()
], BankAccountSteps);
exports.BankAccountSteps = BankAccountSteps;
//# sourceMappingURL=bankaccount.step.js.map