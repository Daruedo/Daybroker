import { InterfaceModel } from "../interfaces/interface-model.js";

export class Deal implements InterfaceModel<Deal>{
    constructor(
        private _date: Date, 
        public readonly quantity: number, 
        public readonly value: number
    ) {}

    public static createFrom(dateString: string, quantityString: string, valueString: string): Deal {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
        return new Deal(date, quantity, value);
    }

    get volume(): number {
        return this.quantity * this.value;
    }

    get date(): Date {
        const date = new Date(this._date.getTime());
        return date;
    }

    public toString(): string {
        return `
            Data: ${this.date},
            Quantidade: ${this.quantity},
            Valor: ${this.value}
        `;
    }

    public isDealEqual(deal: Deal): boolean {
        return this.date.getDate() === deal.date.getDate()
            && this.date.getMonth() === deal.date.getMonth()
            && this.date.getFullYear() === deal.date.getFullYear();
    }
    
}