import { DealsRegistered } from "../interfaces/deals-registered.js";
import { Deal } from "../models/deal.js";

export class DealsService {
    public getDealsRegistered(): Promise<Deal[]> {
        return fetch('http://localhost:8080/data')
        .then(res => res.json())
        .then((data: DealsRegistered[]) => {
            return data.map(dataRegistered => {
                return new Deal(new Date(), dataRegistered.quantity, dataRegistered.value)
            })
        })
    }
}