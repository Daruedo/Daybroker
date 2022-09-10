import { WorkingDays } from '../enums/working-days.js';
import { Deal } from '../models/deal.js';
import { Deals } from '../models/deals.js';
import { DealsView } from '../views/deals-view.js';
import { MessageView } from '../views/message-view.js';
export class DealController {
    constructor() {
        this.deals = new Deals();
        this.dealsView = new DealsView('#dealsView');
        this.messageView = new MessageView('#messageView');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.dealsView.update(this.deals);
    }
    increase() {
        const deal = Deal.createFrom(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isWorkingDay(deal.date)) {
            this.messageView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.deals.increase(deal);
        this.clearForm();
        this.updateView();
    }
    isWorkingDay(date) {
        return date.getDay() > WorkingDays.SUNDAY
            && date.getDay() < WorkingDays.SATURDAY;
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '1';
        this.inputValue.value = '0.0';
        this.inputDate.focus();
    }
    updateView() {
        this.dealsView.update(this.deals);
        this.messageView.update('Negociação adicionada com sucesso');
    }
}
