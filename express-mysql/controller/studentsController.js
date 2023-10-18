const db = require("../database");

module.exports = {
   getAll: (req, res) => {
      db.query("SELECT * FROM Students", (err, result) => {
         err
            ? res.status(400).send({ message: err.message })
            : res.status(200).send({
                 status: "success",
                 data: result,
              });
      });
   },
   getById: (req, res) => {
      const { id } = req.params;
      db.query(`SELECT * FROM Students WHERE id=${id}`, (err, result) => {
         err
            ? res.status(400).send({ message: err.message })
            : res.status(200).send({ status: "success", data: result });
      });
   },
   register: (req, res) => {
      const { name, age, city, gender } = req.body;
      db.query(
         `INSERT INTO Students(name, age, city, gender) VALUES(
            ${db.escape(name)},
             ${db.escape(age)},
              ${db.escape(city)}, 
            ${db.escape(gender)})`,
         (err, result) => {
            err
               ? res.status(400).send(err)
               : res.status(200).send({ status: "success", data: result });
         }
      );
   },
   editById: (req, res) => {
      const id = req.params.id;
      const value = [];
      for (const key in req.body) {
         value.push(`${key} = ${db.escape(req.body[key])}`);
      }
      db.query(
         `UPDATE Students SET ${value.join(", ")} WHERE id =${id}`,
         (err, result) => {
            err
               ? res.status(400).send(err)
               : res.status(200).send({ status: "success", data: result });
         }
      );
      res.status(200).send({ status: "success" });
   },
   deleteById: (req, res) => {
      const { id } = req.params;
      db.query(`DELETE FROM Students WHERE id=${id}`, (err, result) => {
         err
            ? res.status(400).send({ message: err.message })
            : res.status(200).send({ status: "success", data: result });
      });
   },
};
