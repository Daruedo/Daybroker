import { Deals } from "../models/deals.js";

export class DealsView {
    private element: HTMLElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }

    template(model: Deals): string {
        return `
            <table>
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.list().map(deal => {
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(deal.date)}</td>
                                <td>${deal.quantity}</td>
                                <td>${deal.value}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    update(model: Deals): void {
        this.element.innerHTML = this.template(model);
    }
}