import { Deal } from "../models/deal.js";
export class DealsService {
    getDealsRegistered() {
        return fetch('http://localhost:8080/data')
            .then(res => res.json())
            .then((data) => {
            return data.map(dataRegistered => {
                return new Deal(new Date(), dataRegistered.quantity, dataRegistered.value);
            });
        });
    }
}
//# sourceMappingURL=deals-service.js.map