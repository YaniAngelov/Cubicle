const uniqid = require('uniqid');
const Cube = require('../models/Cube');
const productData = require('../data/productData');
// const { search } = require('../controllers/productController');

function getAll(query) {
    let products = productData.getAll();

    if (query.search) {
        products = products.filter(
            x => x.name.toLocaleLowerCase().includes(query.search.toLocaleLowerCase()));
    }

    if (query.from) {
        products = products.filter(x => Number(x.level) >= query.from);
    }

    if (query.to) {
        products = products.filter(x => Number(x.level) <= query.to);
    }

    return products;
}

function create(data) {
    let cube = new Cube(
        uniqid(), 
        data.name, 
        data.description, 
        data.imageUrl, 
        data.difficultyLevel
    );

    return productData.create(cube);
}

function getOne(id) {
    return productData.getOne(id);
}

module.exports = {
    create,
    getAll,
    getOne
}