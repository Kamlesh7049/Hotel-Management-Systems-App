const express=require("express");
const route=express.Router();
const userController=require("../controllers/userControllers");

route.post("/usersave",userController.userDataSave)
route.get("/userdisplay",userController.userDataDisplay)
route.get("/userupdatedisplay",userController.userUpdateDisplay)
route.post("/userdatadelete",userController.userDataDelete)
route.post("/usereditdata",userController.userEditData)
route.post("/usereditsave",userController.userEditSave)
route.get("/usersearchbyname",userController.userSearchByName)

module.exports=route;
