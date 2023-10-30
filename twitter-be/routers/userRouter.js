const router = require("express").Router();
const { userController } = require("../controller");
const { verifyToken } = require("../middleware/auth");
const { checkRegister } = require("../middleware/validator");
router.post("/", checkRegister, userController.register);
router.get("/", userController.getAll);
router.get("/keeplogin", verifyToken, userController.keepLogin);
router.get("/login", userController.login);
router.patch("/verified", verifyToken, userController.isVerify);
router.get("/:id", userController.getById);
router.patch("/:id", userController.editById);
router.delete("/:id", userController.deleteById);

module.exports = router;
