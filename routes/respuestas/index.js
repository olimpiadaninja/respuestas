const findAllRespuestas = require('../../lib/findAllRespuestas');
const hasCapability = require('../../lib/policies/hasCapability');
const Joi = require('joi');

module.exports = {
    path: '/respuestas',
    method: 'GET',
    handler(request, reply) {
        findAllRespuestas(request.getDb().getModel('Respuestas'), request.query)
        .then(
            r => reply({ found: r.count, respuestas: r.rows }),
            boom => reply(boom)
        );
    },
    config: {
        auth: 'jwt',
        description: 'Obtener una lista de Respuestas con filtros opcionales.',
        plugins: {
            policies: [hasCapability('list_respuestas')]
        },
        validate: {
            query: {
                limit: Joi.number().label('Limit').example(20)
                    .integer()
                    .positive()
                    .max(10000)
                    .default(10),
                offset: Joi.number().label('Offset').example(1000)
                    .integer()
                    .min(0)
                    .default(0),
                examenId: Joi.string().label('Examen').example('omm/qro/2017/1')
                    .max(254),
                amigoId: Joi.string().label('UUID').example('5c4efacf-fd6e-499d-b46a-dd8d24f059d4')
                    .uuid({ version: 'uuidv4' }),
                respuestas: Joi.string().label('Respuestas').example('1:A;2:3;4:C;4:D;5:E;6:A;7:B;8:C;9:D;10:E')
                    .max(254)
            }
        }
    }
};
