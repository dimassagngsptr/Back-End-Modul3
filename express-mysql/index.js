const express = require("express");
const PORT = 2000;

const app = express();
app.use(express.json());

const db = require("./database");
db.connect((error) => {
   if (error) console.log(error);
   else console.log("mysql connection");
});

const { studentsRouter } = require("./routers");
app.use("/students", studentsRouter);

app.listen(PORT, () => {
   console.log(`listening on port: ${PORT}`);
});
