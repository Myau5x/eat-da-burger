const connection = require("./connection");

const ORM = {
    selectAll : function() {connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
            console.log(err)
          
        }
    
        console.log(data)
      }) },
    insertOne : function(name) {connection.query("INSERT INTO burgers (burger_name) VALUES (?);",name, function(err, data) {
        if (err) {
            console.log(err)
          
        }
    
        console.log(data)
      }) },
    updateOne : function(id) {connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?",id, function(err, data) {
        if (err) {
            console.log(err)
          
        }
    
        console.log(data)
      }) },
}

module.exports = ORM;