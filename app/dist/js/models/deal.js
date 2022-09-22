export class Deal {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    static createFrom(dateString, quantityString, valueString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
        return new Deal(date, quantity, value);
    }
    get volume() {
        return this.quantity * this.value;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    toString() {
        return `
            Data: ${this.date},
            Quantidade: ${this.quantity},
            Valor: ${this.value}
        `;
    }
    isDealEqual(deal) {
        return this.date.getDate() === deal.date.getDate()
            && this.date.getMonth() === deal.date.getMonth()
            && this.date.getFullYear() === deal.date.getFullYear();
    }
}
//# sourceMappingURL=deal.js.map