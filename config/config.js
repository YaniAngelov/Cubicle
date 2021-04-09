const config = {
    development: {
        PORT: 5000,
        DB_CONNECTION: 'mongodb://localhost/cubicleDb'
    },
    production: {
        PORT: 80,
        DB_CONNECTION: 'mongodb+srv://YaniAngelov:YaniAngelov@cubicles.wjq1h.mongodb.net/cubicle'
    }
};

module.exports = config[process.env.NODE_ENV.trim()]