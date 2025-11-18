const mongoose = require('mongoose');

const officeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        required: true,
    },
    capacity: {
        type: Number,
    }
}, { timestamps: true });

module.exports = mongoose.model('Office', officeSchema);
