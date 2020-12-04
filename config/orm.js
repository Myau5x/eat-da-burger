const connection = require("./connection");

const ORM = {
    selectAll : function(table) {
      let queryString = "SELECT * FROM ??;";
      connection.query(queryString,[table], function(err, data) {
        if (err) {
            console.log(err)
          
        }
    
        console.log(data)
      }) },
    insertOne : function(table, col_name, value) {
      let queryString = "INSERT INTO ?? (??) VALUES (?);"
      connection.query(queryString,[table,col_name,value], function(err, data) {
        if (err) {
            console.log(err)
          
        }
    
        console.log(data)
      }) },
    updateOne : function(table, update_col, value, id) {
      let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?"
      connection.query(queryString,[table, update_col,value,id], function(err, data) {
        if (err) {
            console.log(err)
          
        }
    
        console.log(data)
      }) },
}

module.exports = ORM;