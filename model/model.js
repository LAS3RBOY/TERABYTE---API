const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    definition: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        enum: {
            values: ['HTML', "CSS", "Javascript"]
        }
    }
})

module.exports = mongoose.model('Course', courseSchema);