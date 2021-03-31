const uniqid = require('uniqid');
const Cube = require('../models/Cube');
const fs = require('fs/promises');
const path = require('path');
const productsData = require('../database/products.json');

function getAll() {
    return productsData;
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