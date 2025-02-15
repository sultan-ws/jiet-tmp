const express = require('express');
const { createVideo, readVideos } = require('../../controllers/admin/video.controllers');

const videoRouter = express.Router();

videoRouter.post('/create-video', createVideo);
videoRouter.get('/read-videos', readVideos);

module.exports = videoRouter;