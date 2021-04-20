const config = {
    development: {
        PORT: 5000,
        DB_CONNECTION: 'mongodb://localhost/cubicleDb',
        SALT_ROUNDS: 1,
        SECRET: 'supersecret',
        COOKIE_NAME: 'USER_SESSION',                                                     
    },
    production: {
        PORT: 80,
        DB_CONNECTION: 'Insert MongoDB Atlas connection here!',
        SALT_ROUNDS: 10,
        SECRET: 'supersecret',
        COOKIE_NAME: 'USER_SESSION',                                                                                              
    }
};

module.exports = config[process.env.NODE_ENV.trim()]