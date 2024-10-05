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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultisigController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const multisig_service_1 = require("./multisig.service");
let MultisigController = class MultisigController {
    constructor(multisigService) {
        this.multisigService = multisigService;
    }
    async hashOwners(owners) {
        return await this.multisigService.hashOwners(owners);
    }
};
exports.MultisigController = MultisigController;
__decorate([
    (0, common_2.Post)('seed'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MultisigController.prototype, "hashOwners", null);
exports.MultisigController = MultisigController = __decorate([
    (0, common_1.Controller)('multisig'),
    __metadata("design:paramtypes", [multisig_service_1.MultisigService])
], MultisigController);
//# sourceMappingURL=multisig.controller.js.map