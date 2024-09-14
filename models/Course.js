// models/Course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    tutor: { type: String, required: true }
});

module.exports = mongoose.model('Course', courseSchema);
