const connection = require("./connection");

const ORM = {
    selectAll : function(table, cb) {
      let queryString = "SELECT * FROM ??;";
      connection.query(queryString,[table], function(err, data) {
        if (err) {
            throw err;
          
        }
    
        cb(data);
      }) },
    insertOne : function(table, col_name, value, cb) {
      let queryString = "INSERT INTO ?? (??) VALUES (?);"
      connection.query(queryString,[table,col_name,value], function(err, data) {
        if (err) {
            throw err;
          
        }
    
        cb(data)
      }) },
    updateOne : function(table, update_col, value, id,cb) {
      let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?"
      connection.query(queryString,[table, update_col,value,id], function(err, data) {
        if (err) {
            throw err;
          
        }
    
        cb(data)
      }) },
}

module.exports = ORM;