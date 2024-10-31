import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



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

      </td>
    </tr>
  </>
))

  return (
   <>
   <h4> Update User Records </h4>
   </>
  );
};

export default Update;
