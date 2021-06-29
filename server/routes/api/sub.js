const router = require("express").Router();
const articleController = require("../../controllers/subController");

router.route("/")
    .get(subController.findAll);

router.route("/:id")
    .get(subController.findOne)
    .delete(subController.remove);

module.exports = router;