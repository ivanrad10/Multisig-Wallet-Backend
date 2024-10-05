import { Body, Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { PublicKey } from '@solana/web3.js';
import { MultisigService } from './multisig.service';

@Controller('multisig')
export class MultisigController {
    constructor(private multisigService: MultisigService) {
    }

    @Post('seed')
    async hashOwners(@Body() owners: { owners: string[] }) {
        return await this.multisigService.hashOwners(owners)
    }
}
