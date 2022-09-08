import { Deal } from './deal.js';

export class Deals {
    private deals: Deal[] = [];

    increase(deal: Deal) {
        this.deals.push(deal);
    }

    list(): readonly Deal[] {
        return this.deals;
    }
}
