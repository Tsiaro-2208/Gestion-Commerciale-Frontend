import { BaseService } from "./base.service";

export interface Tier {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    type: TierType;
    createdAt: Date;
    updatedAt: Date;
}

export enum TierType {
    CLIENT = "CLIENT",
    FOURNISSEUR = "FOURNISSEUR",
}

export class TierService extends BaseService<Tier> {
    constructor() {
        super("/tier");
    }

    async getClients(): Promise<Tier[]> {
        return this.getByType(TierType.CLIENT);
    }

    async getFournisseurs(): Promise<Tier[]> {
        return this.getByType(TierType.FOURNISSEUR);
    }
}