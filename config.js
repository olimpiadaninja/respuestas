const parsedDotEnv = require('dotenv').config().parsed;

const env = parsedDotEnv || process.env;
module.exports = {
    authKey: env.AUTH_KEY,
    sqlConnection: {
        uri: env.DATABASE_URL || env.SQL_DATABASE_URL ||
        `${env.SQL_DIALECT}://${env.SQL_USER}:${env.SQL_PASSWORD}@${env.SQL_HOST}/${env.SQL_DATABASE}` || false,
        database: env.SQL_DATABASE,
        user: env.SQL_USER,
        password: env.SQL_PASSWORD,
        options: {
            dialect: env.SQL_DIALECT,
            host: env.SQL_HOST,
            port: env.SQL_PORT,
            logging: String(env.SQL_LOGGING) === 'true',
            dialectOptions: {
                ssl: String(env.SQL_SSL) === 'true'
            }
        }
    },
    smtp: {
        host: env.SMTP_HOST,
        user: env.SMTP_USER,
        password: env.SMTP_PASSWORD,
        port: env.SMTP_PORT,
        ssl: String(env.SMTP_SSL) === 'true',
        tls: String(env.SMTP_TLS) === 'true'
    },
    smtp_from: env.SMTP_FROM,
    smtp_reply_to: env.SMTP_REPLY_TO,
    jwtRedeemURL(token) {
        return `${env.JWT_REDEEM_URI}${token}`;
    }
};
