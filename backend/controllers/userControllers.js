const userModel = require("../models/userModels");


const userDataSave=async(req,res)=>{
    // res.send("Data Save successfully ok!!")

const {name, email, mobile,roomType,checkIn,checkOut,message}=req.body;
try{
    const User=await userModel.create({
        name:name,
        email:email,
        mobile:mobile,
        roomType:roomType,
        checkIn:checkIn,
        checkOut:checkOut,
        message:message
    })
    console.log("data save!")
    res.status(200).json(User);

}
catch(error){
    res.status(404).json("MangoDB Server No Started!!!")
}
}

const userDataDisplay=async(req,res)=>{
    try{
        const userdata=await userModel.find();
        console.log("Data Successfully Display!!")
        res.status(200).json(userdata)
    }
    catch(error){
        res.status(404).json("Data from MongoDB not found!!")
    }
}


module.exports={
    userDataSave,
    userDataDisplay
}