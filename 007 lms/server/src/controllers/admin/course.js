const Course = require("../../models/course");

const createCourse = async (req, res) => {
    try {
        const data = req.body;

        if (req.files && req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename

        console.log(data)
        const newCourse = new Course(data);
        const response = await newCourse.save();
        res.status(200).json({ message: 'success', data: response });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const readCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        const filepath = `${req.protocol}://${req.get('host')}/files/`
        res.status(200).json({ message: 'success', data: courses, filepath });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}

const activeCourses = async (req, res) => {
    try {
        const courses = await Course.find({status: true});
        const filepath = `${req.protocol}://${req.get('host')}/files/`
        res.status(200).json({ message: 'success', data: courses, filepath });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}

module.exports = {
    createCourse,
    readCourses,
    activeCourses
}