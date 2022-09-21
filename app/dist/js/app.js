import { DealController } from './controllers/deal-controller.js';
const controller = new DealController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.increase();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
const buttonImport = document.querySelector('#button-import');
if (buttonImport) {
    buttonImport.addEventListener('click', () => {
        controller.importData();
    });
}
else {
    throw Error('Botão importa não foi encontrado');
}
