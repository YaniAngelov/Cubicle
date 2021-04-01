const uniqid = require('uniqid');
const Cube = require('../models/Cube');
const fs = require('fs/promises');
const path = require('path');
const productsData = require('../database/products.json');
const { search } = require('../controllers/productController');

function getAll(query) {
    let result = productsData;

    if (query.search) {
        result = result.filter(
            x => x.name.toLocaleLowerCase().includes(query.search.toLocaleLowerCase()));
    }

    if (query.from) {
        result = result.filter(x => Number(x.level) >= query.from);
    }

    if (query.to) {
        result = result.filter(x => Number(x.level) <= query.to);
    }

    return result;
}

function create(data, callback) {
    let cube = new Cube(
        uniqid(), 
        data.name, 
        data.description, 
        data.imageUrl, 
        data.difficultyLevel
    );

    productsData.push(cube);

    // fs.writeFile(
    //     path.join(__dirname + '/../database/products.json'), 
    //     JSON.stringify(productsData), 
    //     callback
    // );

    return fs.writeFile(
        path.join(__dirname, '../database/products.json'), 
        JSON.stringify(productsData),
    );
}

function getOne(id) {
    return productsData.find(x => x.id == id);
}

module.exports = {
    create,
    getAll,
    getOne
}