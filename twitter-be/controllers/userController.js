const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./user.json", "utf-8"));

module.exports = {
   getAll: (req, res) => {
      res.status(200).send(data);
   },
   getById: (req, res) => {
      const result = data.filter((item) => item.id == req.params.id);
      result.length == 1
         ? res.status(200).send(result)
         : res.status(404).send("User not found");
   },
   postAll: (req, res) => {
      const id = data.length ? Math.max(...data.map((item) => item.id)) + 1 : 1;
      req.body.id = id;
      console.log(id);
      data.push(req.body);
      fs.writeFileSync("./user.json", JSON.stringify(data), "utf-8");
      res.status(200).send("Registered");
   },
   deleteById: (req, res) => {
      const index = data.findIndex((item) => item.id == req.params.id);
      if (index >= 0) {
         data.splice(index, 1);
         fs.writeFileSync("./user.json", JSON.stringify(data), "utf-8");
         res.status(200).send("Deleted");
      } else {
         res.status(404).send("Not Found");
      }
   },
   editById: (req, res) => {
      const id = +req.params.id;
      const updateData = req.body;
      const userIndex = data.findIndex((user) => user.id === id);

      if (userIndex !== -1) {
         data[userIndex] = { ...data[userIndex], ...updateData };
         fs.writeFileSync("./user.json", JSON.stringify(data), "utf-8");
         res.status(200).json(data[userIndex]);
      } else {
         res.status(400).json({ message: "User not found" });
      }
   },
   login: (req, res) => {
      const { email, password } = req.query;
      const result = data.filter(
         (item) => item.email === email && item.password === password
      );
      result.length == 1
         ? res.status(200).send(result)
         : res.status(400).json({ message: "User not found" });
   },
};
