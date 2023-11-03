const express = require("express");
const PORT = 2000;
const db = require("./models");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use("/public", express.static("./public"));

app.use("/api/", (req, res) => {
   res.send("This is my API");
});

console.log(process.env.MESSAGE);

const { userRouter } = require("./routers");
app.use("/users", userRouter);

app.listen(PORT, () => {
   // db.sequelize.sync({ alter: true });
   console.log(`listening on ${PORT}`);
});
