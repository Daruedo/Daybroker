import { DealController } from './controllers/deal-controller.js';

const controller = new DealController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.increase();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
