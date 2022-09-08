import { DealController } from './controllers/deal-controller.js';

const controller = new DealController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.increase();
});