const data = [
   { id: 1, username: "user 1", password: "asd" },
   { id: 2, username: "user 2", password: "asd" },
];

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
      const maxId = Math.max(...data.map((item) => item.id)) + 1;
      newData.id = maxId;
      data.push(req.body);
      res.status(200).send("Registered");
   },
   deleteById: (req, res) => {
      const index = data.findIndex((item) => item.id == req.params.id);
      if (index >= 0) {
         data.splice(index, 1);
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
         res.status(200).json(data[userIndex]);
      } else {
         res.status(400).json({ message: "User not found" });
      }
   },
};
