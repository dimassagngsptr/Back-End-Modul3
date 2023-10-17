const moment = require("moment");
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./database/db.json", "utf-8"));

module.exports = {
   getId: (req, res, next) => {
      const id = data.length ? Math.max(...data.map((item) => item.id)) + 1 : 1;
      req.body.id = id;
      next();
    },
   getDate: (req, res, next) => {
      const tanggal = new Date();
      const tanggalFormat = moment(tanggal).format("YYYY-MM-DD");
      req.body.date = tanggalFormat;
      next();
    },
};
