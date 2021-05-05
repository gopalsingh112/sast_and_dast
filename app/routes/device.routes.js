module.exports = app => {
  const devices = require("../controllers/device.controller.js");

  var router = require("express").Router();

  // Create a new Device
  router.post("/", devices.create);

  // Retrieve all Devices
  router.get("/", devices.findAll);

  // Retrieve all published Devices
  router.get("/published", devices.findAllPublished);

  // Retrieve a single Book with id
  router.get("/:id", devices.findOne);

  // Update a Book with id
  router.put("/:id", devices.update);

  // Delete a Book with id
  router.delete("/:id", devices.delete);

  // Create a new Book
  router.delete("/", devices.deleteAll);

  app.use('/api/devices', router);


};