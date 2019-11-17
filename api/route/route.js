const router = require("express").Router();
const UserModel = require("../models/model");
const mongoose = require("mongoose");

router
  .get("/", async (req, res) => {
    const data = await UserModel.find({});
    res.json(data);
  })
  // .get('/', async (req, res) => {
  //   const data = await UserModel.findOne({'name': Headers.})
  // })
  .post("/", async (req, res) => {
    const ob = await new UserModel(req.body.payload)
    ob
      .save()
      .then(data => res.json(data))
      .then(data => { console.log(data); return data; })
      .catch(err => res.json({ message: err }));
  });

module.exports = router;
