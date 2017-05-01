const Boom = require('boom');

module.exports = (Respuestas, requestQuery) => {
    const where = {};
    ['examenId', 'respuestas'].forEach((q) => {
        if(!requestQuery[q] || requestQuery[q] === '') return;
        where[q] = { ilike: requestQuery[q] };
    });

    if(requestQuery.amigoId) where.amigoId = requestQuery.amigoId;

    return Respuestas
        .findAndCountAll({
            where,
            limit: requestQuery.limit,
            offset: requestQuery.offset
        })
        .then(result => result)
        .catch(() => {
            throw Boom.expectationFailed('Ocurrió un error al obtener la lista de respuestas desde la base de datos.');
        });
};
