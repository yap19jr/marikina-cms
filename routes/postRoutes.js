const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

// @route GET & POST - /Rooms List/
router
  .route("/room")
  .get(postControllers.getAllRooms)
  .post(postControllers.createNewRooms);

router.route("/room/:id")
.get(postControllers.getRoomsById);

router
  .route("/images/:id")
  .get(postControllers.getImagesById);

router
  .route("/gallery")
  .get(postControllers.getAllImages);


module.exports = router;
