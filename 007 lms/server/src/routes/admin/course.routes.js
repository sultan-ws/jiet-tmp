const express = require('express');
const { createCourse } = require('../../controllers/admin/course.controllers');
const uploader = require('../../middlewares/multer.middleware');

const courseRouter = express.Router();

courseRouter.use(uploader);

courseRouter.post('/create-course', createCourse);

module.exports = courseRouter;