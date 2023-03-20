const Rooms = require("../models/post");

//Get all Rooms//
exports.getAllRooms = async (req, res, next) => {
try {
    const [rooms, _] = await Rooms.findAll();

    res.status(200).json({rooms});
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.createNewRooms = async (req, res, next) => {
    res.send("Create New Room Route 11");
}

exports.getRoomsById = async (req, res, next) => {
    try {
        let roomId = req.params.id;
        let [rooms, _] = await Rooms.findById(roomId);

        res.status(200).json({Rooms:rooms[0]})
    } catch (error) {
        next(error)
    }
    
}

exports.getImagesById = async (req, res, next) => {
    try {
        let imageId = req.params.id;
        let [images, _] = await Rooms.findEmagesById(imageId);

        res.status(200).json({rooms:images[0]})
    } catch (error) {
        next(error)
    }
}

exports.getAllImages = async (req, res, next) => {
    try {
        const [allImages, _] = await Rooms.findAllImages();
        res.status(200).json({allImages});
        } catch (error) {
            console.log(error);
            next(error);
        }
    }