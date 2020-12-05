//const connection = require("./config/connection");
const ORM = require("./config/orm");
const express = require("express");

//ORM.insertOne("burgers","burger_name","MozarellaBurger");
//ORM.updateOne('burgers','devoured',1,3);
ORM.selectAll("burgers", console.log);