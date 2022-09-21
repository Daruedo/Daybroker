var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from '../decorators/dom-injector.js';
import { inspect } from '../decorators/inspect.js';
import { runtimeLogin } from '../decorators/runtime-login.js';
import { WorkingDays } from '../enums/working-days.js';
import { Deal } from '../models/deal.js';
import { Deals } from '../models/deals.js';
import { DealsService } from '../services/deals-service.js';
import { DealsView } from '../views/deals-view.js';
import { MessageView } from '../views/message-view.js';
export class DealController {
    constructor() {
        this.deals = new Deals();
        this.dealsView = new DealsView('#dealsView');
        this.messageView = new MessageView('#messageView');
        this.dealsService = new DealsService();
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
    importData() {
        this.dealsService.getDealsRegistered()
            .then(dealsRegistered => {
            for (let deal of dealsRegistered) {
                this.deals.increase(deal);
            }
            this.dealsView.update(this.deals);
        });
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
__decorate([
    domInjector('#date')
], DealController.prototype, "inputDate", void 0);
__decorate([
    domInjector('#quantity')
], DealController.prototype, "inputQuantity", void 0);
__decorate([
    domInjector('#value')
], DealController.prototype, "inputValue", void 0);
__decorate([
    inspect,
    runtimeLogin()
], DealController.prototype, "increase", null);
