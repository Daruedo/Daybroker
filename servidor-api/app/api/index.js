/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}


api.data = function(req, res) {

    res.json([
        { value: 200.5, quantity: 2 },
        { value: 100.2, quantity: 5 },
        { value: 50.5, quantity: 1 },
        { value: 70.5, quantity: 2 }
    ]);
    
};


module.exports = api;