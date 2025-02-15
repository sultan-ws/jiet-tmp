const express = require('express');
const { createCourse } = require('../../controllers/admin/course.controllers');

const courseRouter = express.Router();

courseRouter.post('/create-course', createCourse);

module.exports = courseRouter;