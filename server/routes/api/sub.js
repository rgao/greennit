const router = require("express").Router();
const subController = require("../../controllers/subController");

router.route("/")
    .get(subController.findAll);

router.route("/:id")
    .get(subController.findOne)
    .delete(subController.remove);

module.exports = router;