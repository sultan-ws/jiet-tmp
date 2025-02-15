const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + Math.round(Math.random() * 9999) + file.originalname);
    }
});


const uploader = multer({ storage }).fields([
    { name: 'thumbnail', maxCount: 1 },
]);

module.exports = uploader;