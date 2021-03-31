const uniqid = require('uniqid');
const Cube = require('../models/Cube');
const fs = require('fs');
const path = require('path');
const productsData = require('../database/products.json');

function getAll() {
    return productsData;
}

function create(data) {
    let cube = new Cube(
        uniqid(), 
        data.name, 
        data.description, 
        data.imageUrl, 
        data.difficultyLevel
    );

    productsData.push(cube);

    fs.writeFile(path.join(__dirname + '/../database/products.json'), JSON.stringify(productsData), (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
    
}

function getOne(id) {
    return productsData.find(x => x.id == id);
}

module.exports = {
    create,
    getAll,
    getOne
}