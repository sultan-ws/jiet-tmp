const express = require('express');
const { createCourse, readCourses, activeCourses } = require('../../controllers/admin/course');
const uploader = require('../../middlewares/multer.middleware');

const courseRouter = express.Router();

courseRouter.post('/create-course', createCourse);
courseRouter.get('/read-courses', readCourses);
courseRouter.get('/active-courses', activeCourses);

module.exports = courseRouter;