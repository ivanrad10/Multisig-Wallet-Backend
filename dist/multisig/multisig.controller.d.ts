import { MultisigService } from './multisig.service';
export declare class MultisigController {
    private multisigService;
    constructor(multisigService: MultisigService);
    hashOwners(owners: {
        owners: string[];
    }): Promise<Uint8Array>;
}
