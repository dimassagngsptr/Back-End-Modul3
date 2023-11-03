const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
   //    const users = ["Users 1", "Users 2", "Users 3"];
   const users = await User.findAll();
   res.status(200).send(users);
});

module.exports = router;
