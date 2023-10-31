const express = require("express");
const PORT = 2000;
const axios = require("axios");
const ioredis = require("ioredis");
const client = ioredis.createClient(6379);

const app = express();

client.on("connect", () => {
   console.log("connect to redis server");
});

app.use(express.json());

app.get("/dogs", async (req, res) => {
   const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
   res.status(200).send(data);
});

app.get("/dogs/:breeds", async (req, res) => {
   try {
      const { breeds } = req.params;

      client.get(breeds, async (err, dogs) => {
         if (dogs) return res.status(200).send(dogs);

         const { data } = await axios.get(
            `https://dog.ceo/api/breed/${breeds}/images`
         );
         client.setex(breeds, 100, JSON.stringify(data));
         res.status(200).send(data);
      });
   } catch (error) {
      res.status(404).send(error);
   }
});

app.listen(PORT, () => {
   console.log(`listening on ${PORT}`);
});
