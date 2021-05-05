const db = require("../models");
const Support = db.supports;

exports.create = (req, res) => {
    if (!req.body.problem) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  

    const support = new Support({
      problem: req.body.problem,
      warranty: req.body.date
    });
  

    support
      .save(support)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Support."
        });
      });
  };
  
  exports.findAll = (req, res) => {
    const problem = req.query.problem;
    var condition = problem? { problem: { $regex: new RegExp(problem), $options: "i" } } : {};
  
    Support.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Supports."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Support.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Support with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Support with id=" + id });
      });
  };

  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Support.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Support with id=${id}. Maybe Support was not found!`
          });
        } else res.send({ message: "Support was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Support with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Support.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Support with id=${id}. Maybe Support was not found!`
          });
        } else {
          res.send({
            message: "Support was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Support with id=" + id
        });
      });
  };
  
  exports.deleteAll = (req, res) => {
    Support.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Supports were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Supports."
        });
      });
  };





























// const { model } = require("mongoose");
// const db = require("../models");
// const Support = db.supports;

// const create = (req, res) => {
//     // Validate request
//     if (!req.body.problem) {
//       res.status(400).send({ message: "Content can not be empty!" });
//       return;
//     }
  
//     const support = new Support({
//       problem: req.body.problem,
//       warranty: req.body.warranty
//     //   support: [{type: Schema.Types.ObjectId, ref:'Support'}]
//     });
  
//     // Save Support in the database
//     support
//       .save(support)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while creating the Support."
//         });
//       });
//       res.json('AAA');
//   };

// const findAll = (req, res) => {
//     const problem = req.query.problem;
//     var condition = problem? { problem: { $regex: new RegExp(problem), $options: "i" } } : {};
  
//     Support.find(condition)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving Supports."
//         });
//       });
//   };

// module.exports = {
//   create, 
//   findAll
// };
