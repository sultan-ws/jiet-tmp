export const createCourse = async (req, res) => {
    try{
        console.log(req.files, req.body);
        res.status(200).json({message: 'success'});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal Server Error", error:  error.message});
    }
};