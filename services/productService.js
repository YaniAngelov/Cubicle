const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const productData = require('../data/productData');

async function getAll(query) {
    let products = await Cube.find({}).lean();

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
    let cube = new Cube(data);

    return cube.save();
}

function getOne(id) {
    return Cube.findById(id).lean();
}

function getOneWithAccessories(id) {
    return Cube.findById(id)
        .populate('accessories')
            .lean();
}

async function attachAccessory(productId, accessoryId) {
    let product = await Cube.findById(productId);
    let accesory = await Accessory.findById(accessoryId);

    product.accessories.push(accesory);
    return product.save();
}

module.exports = {
    create,
    getAll,
    getOne,
    getOneWithAccessories,
    attachAccessory
}