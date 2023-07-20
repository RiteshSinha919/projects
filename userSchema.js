const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resource = new Schema({
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("userCredentials",resource);