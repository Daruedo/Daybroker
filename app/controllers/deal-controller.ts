import { Deal } from '../models/deal.js';
import { Deals } from '../models/deals.js';

export class DealController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private deals = new Deals();

    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
    }

    increase(): void {
        const deal = this.createDeal();
        deal.date.setDate(12);
        this.deals.increase(deal);
        console.log(this.deals.list());
        this.clearForm();
    }

    createDeal(): Deal {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Deal(date, quantity, value);
    }

    clearForm(): void {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
