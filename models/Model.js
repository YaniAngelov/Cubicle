const fs = require('fs/promises');
const path = require('path');
const productDb = require('../database/products.json');

class Model {

    save() {
        productDb.push(this);
    
            return fs.writeFile(
                path.join(__dirname, '../database/products.json'), 
                JSON.stringify(productDb)
            );
    }

    static getAll() {
        return productDb;
    }

    static getOne(id) {
        return productDb.find(x => x.id == id);
    }

}

module.exports = Model;