import { Injectable } from '@nestjs/common';
import * as crypto from "crypto"
@Injectable()
export class MultisigService {
    async hashOwners(input: { owners: string[] }) {
        const owners = input.owners;

        console.log(owners)

        let hexString = crypto.createHash('sha256').update(owners.toString(), 'utf-8').digest('hex');

        let seed = Uint8Array.from(Buffer.from(hexString, 'hex'));

        console.log(seed)

        return seed;
    }
}
