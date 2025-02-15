const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        duration: { type: String, required: true },
        price:{ type: Number, required: true },
        thumbnail: { type: String },
        status:{ type:Boolean, default: true }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: 'courses',
    }
);

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;