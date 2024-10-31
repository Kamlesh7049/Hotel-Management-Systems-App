const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Fixed typo: changed 'require' to 'required'
    },
    email: {
        type: String,
        required: true // Fixed typo
    },
    mobile: {
        type: Number,
        required: true // Fixed typo
    },
    roomType: {
        type: String,
        required: true // Fixed typo
    },
    checkIn: {
        type: Date, // Changed to Date
        required: true
    },
    checkOut: {
        type: Date, // Changed to Date
        required: true
    },
    message: {
        type: String,
        required: true // Fixed typo
    }
});

module.exports = mongoose.model("User", userSchema); // Changed to 'User' for better naming convention
