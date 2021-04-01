const fs = require('fs/promises');
const path = require('path');
const productDb = require('../database/products.json');

module.exports = {
    getAll() {
        return productDb;
    },

    getOne(id) {
        return productDb.find(x => x.id == id);
    },

    create(product) {
        productDb.push(product);

        return fs.writeFile(
            path.join(__dirname, '../database/products.json'), 
            JSON.stringify(productDb)
        );
    }
}