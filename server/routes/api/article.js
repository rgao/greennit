const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// router.route("/")
//     .get(articleController.findAll);

// router.route("/:id")
//     .get(articleController.findOne)
//     .delete(articleController.remove);

router.route("/test")
    .get(articleController.testget)
    .post(articleController.testpost);

module.exports = router;