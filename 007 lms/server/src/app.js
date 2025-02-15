const express = require('express');
const courseRouter = require('./routes/admin/course.routes');
const videoRouter = require('./routes/admin/video.routes');
const uploader = require('./middlewares/multer.middleware');

const masterRouter = express.Router();

masterRouter.use(uploader);

masterRouter.use('/admin/course', courseRouter);
masterRouter.use('/admin/video', videoRouter);

module.exports = masterRouter;