import { InterfaceModel } from '../interfaces/interface-model.js';
import { Deal } from './deal.js';

export class Deals implements InterfaceModel<Deals> {
    
    private deals: Deal[] = [];

    increase(deal: Deal) {
        this.deals.push(deal);
    }

    list(): readonly Deal[] {
        return this.deals;
    }

    public toString(): string {
        return JSON.stringify(this.deals, null, 2);
    }

    isDealEqual(deals: Deals): boolean {
        return JSON.stringify(this.deals) === JSON.stringify(deals.list())
    }
}
