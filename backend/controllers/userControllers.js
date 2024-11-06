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
        // console.log("Data Successfully Display!!")
        res.status(200).json(userdata)
    }
    catch(error){
        res.status(404).json("Data from MongoDB not found!!")
    }
}

 const userUpdateDisplay=async(req,res)=>{
    const Data=await userModel.find();
    // res.send("Update Data!!")
    res.send(Data);
 }

  const userDataDelete=async(req,res)=>{
    const myid=req.body.id;
    const userdata=await userModel.findByIdAndDelete(myid);
    console.log("okkk!")
    res.send("record deleted!!!")
  }

  const userEditData=async(req,res)=>{
    const id=req.body.id;
    const Udata=await userModel.findById(id);
    res.send(Udata);
  }

  const userEditSave=async(req,res)=>{
    const {_id,name,email,mobile,roomType,checkIn,checkOut,message}=req.body;
    const userdata=await userModel.findByIdAndUpdate(_id,{
     
    name:name,
    email:email,
    mobile:mobile,
    roomType:roomType,
    checkIn:checkIn,
    checkOut:checkOut,
    message:message

    })
    res.send("Data Succefully Updated!!")
 
  }

  const userSearchByName=async(req,res)=>{
    let uname=req.query.name;
    console.log(req.query.name);
    const docs=await userModel.find({name:{$regex:uname}});
    res.send(docs);
  }

module.exports={
    userDataSave,
    userDataDisplay,
    userUpdateDisplay,
    userDataDelete,
    userEditData,
    userEditSave,
    userSearchByName
}