const express = require("express");
const PORT = 2000;

const app = express();
app.use(express.json());

// router dan handler
app.get("/api", (req, res) => {
   res.send("Hi there, This is Express.js API");
});

const { userRouter } = require("./routers");
app.use("/users", userRouter);

app.listen(PORT, () => {
   console.log(`server started on port ${PORT}`);
});
