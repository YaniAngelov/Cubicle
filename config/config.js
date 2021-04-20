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
        DB_CONNECTION: 'mongodb+srv://YaniAngelov:YaniAngelov@cubicles.wjq1h.mongodb.net/cubicle',
        SALT_ROUNDS: 10,
        SECRET: 'supersecret',
        COOKIE_NAME: 'USER_SESSION',                                                                                              
    }
};

module.exports = config[process.env.NODE_ENV.trim()]