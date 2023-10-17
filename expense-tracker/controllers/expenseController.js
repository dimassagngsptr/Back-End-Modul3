const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./database/db.json", "utf-8"));

module.exports = {
   getAll: (req, res) => {
      const data = JSON.parse(fs.readFileSync("./database/db.json", "utf-8"));
      let { category, start, end } = req.query;
      if (category) {
         const result = data.filter((item) => item.category == category);
         const totalCategory = result.reduce((a, b) => a + b.price, 0);
         result.length >= 1
            ? res.status(200).send({ totalCategory, result })
            : res.status(404).send({ message: "category not found" });
      }
      if (start && end) {
         const result = data.filter(
            (item) =>
               new Date(item.date) >= new Date(start) &&
               new Date(item.date) <= new Date(end)
         );
         result.length >= 1
            ? res.status(200).send(result)
            : res.status(404).send({ message: "not found" });
      }
      const total = data.reduce((a, b) => a + b.price, 0);
      res.status(200).send({ total, data });
   },
   addExpense: (req, res) => {
      //   const tanggal = new Date();
      //   const tanggalFormat = moment(tanggal).format("YYYY-MM-DD");
      //   const id = data.length ? Math.max(...data.map((item) => item.id)) + 1 : 1;
      //   req.body.id = id;
      //   req.body.date = tanggalFormat;
      data.push(req.body);
      fs.writeFileSync("./database/db.json", JSON.stringify(data), "utf-8");
      res.status(200).send({ message: "Registered" });
   },
   getById: (req, res) => {
      const result = data.filter((item) => item.id == req.params.id);
      result.length == 1
         ? res.status(200).send(result)
         : res.status(404).send({ message: "user not found" });
   },
   //    getByCategory: (req, res) => {
   //       const result = data.filter((item) => item.category == req.query.category);
   //       let total = 0;
   //       result.map((item) => (total += item.price));
   //       console.log(total);
   //       result.length >= 1
   //          ? res.status(200).send({ total, result })
   //          : res.status(404).send({ message: "category not found" });
   //    },
   //    getByDate: (req, res) => {
   //       const { start, end } = req.query;
   //       const startDate = new Date(start);
   //       const endDate = new Date(end);
   //       const result = data.filter((item) => {
   //          const dateFilter = new Date(item.date);
   //          console.log(dateFilter);
   //          return dateFilter >= startDate && dateFilter <= endDate;
   //       });
   //       console.log(result);
   //       result.length >= 1
   //          ? res.status(200).send(result)
   //          : res.status(404).send({ message: "not found" });
   //    },
};
