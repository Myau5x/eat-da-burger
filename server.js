//const connection = require("./config/connection");
const ORM = require("./config/orm");

//ORM.insertOne("burgers","burger_name","MozarellaBurger");
ORM.updateOne('burgers','devoured',1,3);
ORM.selectAll("burgers");