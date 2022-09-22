import { domInjector } from '../decorators/dom-injector.js';
import { inspect } from '../decorators/inspect.js';
import { runtimeLogin } from '../decorators/runtime-login.js';
import { WorkingDays } from '../enums/working-days.js';
import { Deal } from '../models/deal.js';
import { Deals } from '../models/deals.js';
import { DealsService } from '../services/deals-service.js';
import { ShowInConsole } from '../utils/show-in-console.js';
import { DealsView } from '../views/deals-view.js';
import { MessageView } from '../views/message-view.js';

export class DealController {
    @domInjector('#date')
    private inputDate: HTMLInputElement;
    @domInjector('#quantity')
    private inputQuantity: HTMLInputElement;
    @domInjector('#value')
    private inputValue: HTMLInputElement;
    private deals = new Deals();
    private dealsView = new DealsView('#dealsView')
    private messageView = new MessageView('#messageView')
    private dealsService = new DealsService();

    constructor() {
        // this.inputDate = <HTMLInputElement>document.querySelector('#date');
        // this.inputQuantity = document.querySelector('#quantity') as HTMLInputElement;
        // this.inputValue = document.querySelector('#value') as HTMLInputElement;
        this.dealsView.update(this.deals);
    }

    @inspect
    @runtimeLogin()
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
        ShowInConsole(deal, this.deals);
        this.clearForm();
        this.updateView();
    }

    importData(): void {
        this.dealsService
            .getDealsRegistered()
            .then(dealsRegistered => {
                return dealsRegistered.filter(dealsRegistered => {
                    return !this.deals
                        .list()
                        .some(deal => deal.isDealEqual(dealsRegistered))
                });
            })
            .then(dealsRegistered => {
                for(let deal of dealsRegistered) {
                    this.deals.increase(deal);
                }
                this.dealsView.update(this.deals);
            });
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
