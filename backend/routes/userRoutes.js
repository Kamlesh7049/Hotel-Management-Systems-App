const express=require("express");
const route=express.Router();
const userController=require("../controllers/userControllers");

route.post("/usersave",userController.userDataSave)
route.get("/userdisplay",userController.userDataDisplay)

module.exports=route;
