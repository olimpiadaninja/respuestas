const Boom = require('boom');

module.exports = (Respuestas, credentials, payload, callback) => {
    Respuestas.update({
        respuestas: payload.respuestas
    }, {
        where: {
            amigoId: credentials.uuid,
            examenId: credentials.examenId
        }
    }).spread(() => {
        callback(payload);
    }).catch(() => {
        callback(Boom.expectationFailed('Ocurrió un error al guardar las respuestas de usuario'));
    });
};
