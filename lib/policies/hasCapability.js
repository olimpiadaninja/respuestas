const Boom = require('boom');

module.exports = capabilityName =>
    (request, reply, next) => {
        const userCapabilities = request.auth.credentials.capabilities || [];
        if(userCapabilities.includes('omni')) {
            next(null, true);
        } else if(userCapabilities.includes(capabilityName)) {
            next(null, true);
        } else next(Boom.forbidden(), false);
    };
