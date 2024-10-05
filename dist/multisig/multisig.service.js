"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultisigService = void 0;
const common_1 = require("@nestjs/common");
const crypto = require("crypto");
let MultisigService = class MultisigService {
    async hashOwners(input) {
        const owners = input.owners;
        console.log(owners);
        let hexString = crypto.createHash('sha256').update(owners.toString(), 'utf-8').digest('hex');
        let seed = Uint8Array.from(Buffer.from(hexString, 'hex'));
        console.log(seed);
        return seed;
    }
};
exports.MultisigService = MultisigService;
exports.MultisigService = MultisigService = __decorate([
    (0, common_1.Injectable)()
], MultisigService);
//# sourceMappingURL=multisig.service.js.map