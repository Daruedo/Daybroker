import { WorkingDays } from '../enums/working-days.js';
import { Deal } from '../models/deal.js';
import { Deals } from '../models/deals.js';
import { DealsView } from '../views/deals-view.js';
import { MessageView } from '../views/message-view.js';

export class DealController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private deals = new Deals();
    private dealsView = new DealsView('#dealsView')
    private messageView = new MessageView('#messageView')

    constructor() {
        this.inputDate = <HTMLInputElement>document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity') as HTMLInputElement;
        this.inputValue = document.querySelector('#value') as HTMLInputElement;
        this.dealsView.update(this.deals);
    }

    public increase(): void {
        const deal = Deal.createFrom(
            this.inputDate.value,
            this.inputQuantity.value,
            this.inputValue.value
        );

        if(!this.isWorkingDay(deal.date)) {
            this.messageView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }

        this.deals.increase(deal);
        this.clearForm();
        this.updateView();
    }

    private isWorkingDay(date: Date) {
        return date.getDay() > WorkingDays.SUNDAY
            && date.getDay() < WorkingDays.SATURDAY;
    }

    clearForm(): void {
        this.inputDate.value = '';
        this.inputQuantity.value = '1';
        this.inputValue.value = '0.0';
        this.inputDate.focus();
    }

    private updateView(): void {
        this.dealsView.update(this.deals);
        this.messageView.update('Negociação adicionada com sucesso')
    }
}
