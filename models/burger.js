const ORM = require("../config/orm");

//ORM.insertOne("burgers","burger_name","MozarellaBurger");
//ORM.updateOne('burgers','devoured',1,3);
//ORM.selectAll("burgers", console.log);

var burger = {
    all: function(cb) {
      ORM.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insert: function( name, cb) {
      ORM.insertOne("burgers", "burger_name", name, function(res) {
        cb(res);
      });
    },
    update: function(id, cb) {
      ORM.updateOne("burgers", "devoured", 1, id, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  