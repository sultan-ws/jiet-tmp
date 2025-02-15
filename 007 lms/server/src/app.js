const express = require('express');
const courseRouter = require('./routes/admin/course.routes');

const masterRouter = express.Router();

masterRouter.use('/admin/course', courseRouter);

module.exports = masterRouter;