const Joi = require('joi');
const updateRespuestas = require('../../lib/updateRespuestas');

module.exports = {
    path: '/respuestas/mine',
    method: 'POST',
    handler(request, reply) {
        updateRespuestas(request.getDb().getModel('Respuestas'), request.auth.credentials, request.payload, reply);
    },
    config: {
        description: 'Actualizar respuestas del usuario actual',
        auth: 'jwt',
        validate: {
            payload: {
                respuestas: Joi.string().label('respuestas').example('1:A;2:D;3B')
                    .max(254)
            }
        }
    }
};
