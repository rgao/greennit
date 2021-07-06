const router = require("express").Router();
const articleRoute = require("./article");
const userRoute = require("./user");

router.use("/user", userRoute);
router.use("/article", articleRoute);
// router.use("/sub", subRoute);

module.exports = router;