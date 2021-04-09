const Accessory = require('../models/Accessory');

function getAll() {
    let accessories = Accessory.find({}).lean();

    return accessories;
}

function getAllWithout(ids) {
    return Accessory.find({ _id: {$nin: ids} }).lean();
}

function create(data) {
    let accessory = new Accessory(data);

    return accessory.save();
}

module.exports = {
    getAll,
    getAllWithout,
    create,
}