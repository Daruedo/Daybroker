import { View } from "./view.js";
export class DealsView extends View {
    template(model) {
        return `
            <table class="table table-hover table-bordered">
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
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
}
