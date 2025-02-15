const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
    {
        course: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
         },
        title: { type: String, required: true },
        link: { type: String, required: true },
        status:{ type:Boolean, default: true }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: 'videos',
    }
);

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;