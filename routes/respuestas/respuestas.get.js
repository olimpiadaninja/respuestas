const findRespuestas = require('../../lib/findRespuestas');

module.exports = {
    path: '/respuestas/mine',
    method: 'GET',
    handler(request, reply) {
        findRespuestas(request.getDb().getModel('Respuestas'), request.auth.credentials, request.payload, reply);
    },
    config: {
        auth: 'jwt',
        description: 'Consultar las respuestas del usuario actual'
    }
};
