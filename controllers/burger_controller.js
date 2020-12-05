const express = require("express");
const burger = require("../models/burger");

///Create Router
const router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
      let hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
router.post("/api/burgers", function(req, res) {
    burger.insert(req.body.name, function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });
  
router.put("/api/burgers/:id", function(req, res) {
    let id = parseInt( req.params.id);
  
    
  
    burger.update(
      id,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });

  module.exports = router;

