export class Deals {
    constructor() {
        this.deals = [];
    }
    increase(deal) {
        this.deals.push(deal);
    }
    list() {
        return this.deals;
    }
}
