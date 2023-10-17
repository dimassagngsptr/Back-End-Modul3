const router = require("express").Router();
const { expenseController } = require("../controllers");
const { getId, getDate } = require("../middleware/index");
router.get("/", expenseController.getAll);
// router.get("/search", expenseController.getByCategory);
// router.get("/date", expenseController.getByDate);
router.post("/", getId, getDate, expenseController.addExpense);
router.get("/:id", expenseController.getById);

module.exports = router;
