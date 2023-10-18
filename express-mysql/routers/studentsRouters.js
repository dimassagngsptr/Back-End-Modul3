const router = require("express").Router();
const { studentsControllers } = require("../controller");

router.get("/", studentsControllers.getAll);
router.post("/", studentsControllers.register);
router.get("/:id", studentsControllers.getById);
router.patch("/:id", studentsControllers.editById);
router.delete("/:id", studentsControllers.deleteById);

module.exports = router;
