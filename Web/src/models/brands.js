const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brands = new Schema({
    name: { type: String },
    image: { type: String }
},
    {
        timestamps: true,
    });
module.exports = mongoose.model('brands', brands);
