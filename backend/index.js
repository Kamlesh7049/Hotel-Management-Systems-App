const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose");
require('dotenv').config();
const userRoute=require("./routes/userRoutes");
mongoose.connect(process.env.DBCONNECTION).then(()=>{
    console.log("DB Successfully Connected!!!" ,  process.env.DBCONNECTION);
});

const port=process.env.PORT || 3000
app.use(cors());
// body-parser middleware
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use("/users",userRoute);

app.listen(port,()=>{
    console.log(`Server run on ${port}`)
})