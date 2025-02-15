const express = require('express');
const { createCourse, readCourses } = require('../../controllers/admin/course');
const uploader = require('../../middlewares/multer.middleware');

const courseRouter = express.Router();

courseRouter.use(uploader);

courseRouter.post('/create-course', createCourse);
courseRouter.get('/read-courses', readCourses);

module.exports = courseRouter;