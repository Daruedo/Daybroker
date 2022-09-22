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
    toString() {
        return JSON.stringify(this.deals, null, 2);
    }
    isDealEqual(deals) {
        return JSON.stringify(this.deals) === JSON.stringify(deals.list());
    }
}
//# sourceMappingURL=deals.js.map