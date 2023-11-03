const express = require("express");
const PORT = 4000;

const app = express();

const userRoutes = require("./routes/user");

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
   console.log(`listening on ${PORT}`);
});

module.exports = app;
