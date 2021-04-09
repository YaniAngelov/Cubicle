const Accessory = require('../models/Accessory');

function getAll() {
    let accessories = Accessory.find({}).lean();

    return accessories;
}

function create(data) {
    let accessory = new Accessory(data);

    return accessory.save();
}

module.exports = {
    getAll,
    create,
}