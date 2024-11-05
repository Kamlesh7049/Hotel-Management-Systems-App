import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditData = () => {
  const { id } = useParams();
  const [mydata, setMydata] = useState({
    name: '',
    email: '',
    mobile: '',
    roomType: '',
    checkIn: '',    // Ensure this is part of the initial state
    checkOut: '',   // Ensure this is part of the initial state
    message: ''
  });

  const loadData = () => {
    let api = "http://localhost:9000/users/usereditdata";
    axios.post(api, { id: id }).then((res) => {
      console.log(res.data); // Verify the structure of this response
      setMydata(res.data); // Ensure this contains checkIn and checkOut
    }).catch((error) => {
      console.error(error);
      toast.error("Error fetching data.");
    });
  };

  useEffect(() => {
    loadData();
  }, [id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMydata((values) => ({ ...values, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Fixed typo here
    let api = "http://localhost:9000/users/usereditsave";
    axios.post(api, mydata).then((res) => {
      toast.success("Data Successfully Updated!!!");
    }).catch((error) => {
      console.error(error);
      toast.error("Failed to update data.");
    });
  }

  return (
    <>
      <section id="booking">
        <h4>Edit User Data</h4>
        <form id="bookingForm" onSubmit={handleSubmit} className="booking-form">
          <div className="form-container">
            <div className="form-section">
              <h5>Personal Information</h5>
              <label htmlFor="name">Name:</label>
              <input type="text" value={mydata.name} id="name" name="name" onChange={handleInput} required />

              <label htmlFor="email">Email:</label>
              <input type="email" value={mydata.email} id="email" name="email" onChange={handleInput} required />

              <label htmlFor="mobile">Mobile Number:</label>
              <input type="tel" value={mydata.mobile} id="mobile" name="mobile" onChange={handleInput} required />
            </div>

            <div className="form-section">
              <h5>Booking Details</h5>
              <label htmlFor="roomType">Room Type:</label>
              <select id="roomType" value={mydata.roomType} name="roomType" onChange={handleInput} required>
                <option value="">Select Room Type</option>
                <option value="single">Single - ₹1000</option>
                <option value="double">Double - ₹1500</option>
                <option value="suite">Suite - ₹3000</option>
              </select>

              <label htmlFor="checkIn">Check-In:</label>
              <input type="date" value={mydata.checkIn} id="checkIn" name="checkIn" onChange={handleInput} required />

              <label htmlFor="checkOut">Check-Out:</label>
              <input type="date" value={mydata.checkOut} id="checkOut" name="checkOut" onChange={handleInput} required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" value={mydata.message} name="message" rows="3" onChange={handleInput} placeholder="Any additional requests..."></textarea>
            </div>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </section>
      <ToastContainer />
    </>
  );
}

export default EditData;
