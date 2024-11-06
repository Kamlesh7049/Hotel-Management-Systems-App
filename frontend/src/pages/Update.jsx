import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import A from "../images/edit.png";
import B from "../images/delete.png";
import Table from 'react-bootstrap/Table';




const Update = () => {
const [mydata,setMydata] =useState([]);

const navigate=useNavigate();
const loadData=()=>{
  let api = "http://localhost:9000/users/userupdatedisplay";
  axios.get(api).then((res)=>{
    console.log(res.data);
    setMydata(res.data);
  });

};
useEffect(()=>{
  loadData()
},[]);


const myrecDel=(id)=>{
  let api = "http://localhost:9000/users/userdatadelete";
  axios.post(api,{id:id}).then((res)=>{
    alert("Data Deleted!!")
    loadData();
  })
}

const myrecEdit=(id)=>{
  navigate(`editdata/${id}`);
}


const ans=mydata.map((key)=>(
  <>
    <tr>
      <td>{key.name}</td>
      <td>{key.email}</td>
      <td>{key.mobile}</td>
      <td>{key.roomType}</td>
      <td>{key.checkIn}</td>
      <td>{key.checkOut}</td>
      <td>{key.message}</td>
      <td>
        <a href="#" onClick={()=>{myrecEdit(key._id)}} style={{marginRight:"10px"}}>
          <img src={A} width="20" height="20" alt="Edit" />
        </a>
       <a href="#" onClick={()=>{myrecDel(key._id)}}>
        <img src={B} width="20" height="20"  alt="" />
       </a>
      </td>
    </tr>
  </>
))

  return (
   <>
   <center>
   <h4 style={{marginTop : "70px"}}> Update User Records </h4><br />
   <Table responsive="sm"
    style={{
      width: "80%",
      margin: "0 auto",
      borderCollapse: "collapse",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Room Type</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
          {ans}
          </thead>
          </Table>
      </center>
   </>
  );
};

export default Update;
