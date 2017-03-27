const Boom = require('boom');

module.exports = (Respuestas, credentials, payload, callback) => {
    Respuestas
        .findOrCreate({ where: {
            amigoId: credentials.uuid,
            examenId: credentials.examenId
        } })
        .spread((respuestas) => {
            callback(respuestas.get({ plain: true }));
        })
        .catch(() => {
            callback(Boom.expectationFailed('Ocurrió un error al obtener las respuestas del usuario desde la base de datos.'));
        });
};
