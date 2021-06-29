const router = require("express").Router();
const articleController = require("../../controllers/userController");

router.route("/:id")
    .get(userController.findOne)
    .delete(userController.remove);

module.exports = router;