import { Deal } from '../models/deal.js';
import { Deals } from '../models/deals.js';
import { DealsView } from '../views/deals-view.js';
export class DealController {
    constructor() {
        this.deals = new Deals();
        this.dealsView = new DealsView('#dealsView');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.dealsView.update(this.deals);
    }
    increase() {
        const deal = this.createDeal();
        this.deals.increase(deal);
        this.dealsView.update(this.deals);
        this.clearForm();
    }
    createDeal() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Deal(date, quantity, value);
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
