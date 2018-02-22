const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var beanSchema = new mongoose.Schema ({
    name: String,
    description: String,
    price: Number
});

module.exports = mongoose.model('Bean', beanSchema);