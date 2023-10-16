const router = require("express").Router();
const { userController } = require("../controllers");
const { getTime } = require("../middleware/time");

// middleware dipasang ditengah2 

router.get("/", getTime, userController.getAll);
router.get("/:id", userController.getById);
router.post("/", userController.postAll);
router.delete("/:id", userController.deleteById);
router.patch("/:id", userController.editById);

module.exports = router;
