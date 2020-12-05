//const connection = require("./config/connection");
const burger = require("./models/burger");
const express = require("express");

//ORM.insertOne("burgers","burger_name","MozarellaBurger");
//ORM.updateOne('burgers','devoured',1,3);
//burger.all(console.log);
//burger.update(4,console.log);
burger.insert("VeggyBurger", console.log)
burger.all(console.log)