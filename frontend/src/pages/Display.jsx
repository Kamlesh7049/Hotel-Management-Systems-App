import React, { useEffect, useState } from 'react';
import axios from 'axios';1
import Table from 'react-bootstrap/Table';

const Display=()=>{
  const[mydata,setMydata]=useState([]);
  const loadData=async()=>{
    let api = "http://localhost:9000/users/userdisplay";
    try{
      const response=await axios.get(api);
      setMydata(response.data);

    }
    catch(error){
      console.log(error)
      alert(error.response.data)
    }
  }
  useEffect(()=>{
    loadData();
  },[]);
 
  
  const ans=mydata.map((key)=>{
    return(
    <>
      <tr>
                
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.mobile}</td>
                <td>{key.roomType}</td>
                <td>{key.checkIn}</td>
                <td>{key.checkOut}</td>
                <td>{key.message}</td>
      </tr>
                
    </>
    )
  })
  return (
    <>
    <center>
    <h4 style={{marginTop : "70px"}}>Booking List</h4><br />
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
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Message</th>
            </tr>
            {ans}
          </thead>

     </Table> 
    
   
    </center>
    
    </>
   
  );
};

export default Display;
