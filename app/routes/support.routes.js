module.exports = app => {
  const supports = require("../controllers/support.controller.js");

  var router = require("express").Router();

  // Create a new Support
  router.post("/", supports.create);

  // Retrieve all Supports
  router.get("/", supports.findAll);

  // Retrieve all published Supports
  // router.get("/published", supports.findAllPublished);

  // Retrieve a single Book with id
  router.get("/:id", supports.findOne);

  // Update a Book with id
  router.put("/:id", supports.update);

  // Delete a Book with id
  router.delete("/:id", supports.delete);

  // Create a new Book
  router.delete("/", supports.deleteAll);

  app.use('/api/supports', router);


};