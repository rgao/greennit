const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.route("/")
    .get(articleController.findAll);

router.route("/:id")
    .get(articleController.findOne)
    .delete(articleController.remove);

module.exports = router;