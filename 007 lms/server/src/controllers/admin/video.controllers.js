const Video = require("../../models/video");

const createVideo = async (req, res) => {
    try{
        const data = new Video(req.body);
        const response = await data.save();
        res.status(201).json({message:'video added', data: response});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Error al crear video", error: error.message});
    }
};

const readVideos = async (req, res) => {
    try{
        const response = await Video.find().populate('course');
        res.status(200).json({message: 'Videos encontrados', data: response});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Error al crear video", error: error.message});
    }
}

module.exports = {
    createVideo,
    readVideos
}