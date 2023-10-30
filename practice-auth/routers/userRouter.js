const router = require("express").Router();
const { userController } = require("../controllers");
const { verifyToken, checkRole } = require("../middleware/auth");
const { multerUpload } = require("../middleware/multer");
const { checkRegister } = require("../middleware/validator");

router.get("/", verifyToken, checkRole, userController.getAll);
router.get("/keeplogin", verifyToken, userController.keepLogin);
router.post("/login", userController.login);
router.post("/", checkRegister, userController.register);
router.patch("/", verifyToken, userController.edit);
router.patch("/update-password", verifyToken, userController.editPassword);
router.patch(
   "/change-img",
   verifyToken,
   multerUpload().single("file"),
   userController.updateImg
);

module.exports = router;
