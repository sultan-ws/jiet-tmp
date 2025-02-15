export const createCourse = async (req, res) => {
    try{
        const data = req.files;

        if(req.files && req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename
        res.status(200).json({message: 'success'});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal Server Error", error:  error.message});
    }
};