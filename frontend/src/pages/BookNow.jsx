import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './BookNow.css'; // Ensure you import your CSS file

const BookNow = () => {
    const [input, setInput] = useState({});
  
    const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setInput(values => ({ ...values, [name]: value }));
      console.log(input);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();  // Prevents the default form submit behavior
  
      let api = "http://localhost:9000/users/usersave";
      axios.post(api, input).then((res) => {
        console.log(res);
        console.log("Data successfully saved!");
        toast.success("Data Successfully saved!!!");
        setInput({});
      
      })
      .catch((err) => {
        alert(err.response.data)
      
      });
    };
  

    return (
        <>
        <section id="booking">
            <h2>Book Your Room</h2>
            <form id="bookingForm" onSubmit={handleSubmit} className="booking-form">
                <div className="form-container">
                    <div className="form-section">
                        <h5>Personal Information</h5>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name"  onChange={handleInput} required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email"  onChange={handleInput} required />

                        <label htmlFor="mobile">Mobile Number:</label>
                        <input type="tel" id="mobile" name="mobile"  onChange={handleInput} required />
                    </div>

                    <div className="form-section">
                        <h5>Booking Details</h5>
                        <label htmlFor="roomType">Room Type:</label>
                        <select id="roomType" name="roomType"  onChange={handleInput} required>
                            <option value="">Select Room Type</option>
                            <option value="single">Single - ₹1000</option>
                            <option value="double">Double - ₹1500</option>
                            <option value="suite">Suite - ₹3000</option>
                        </select>

                        <label htmlFor="checkIn">Check-In:</label>
                        <input type="date" id="checkIn" name="checkIn" onChange={handleInput} required />

                        <label htmlFor="checkOut">Check-Out:</label>
                        <input type="date" id="checkOut" name="checkOut"  onChange={handleInput} required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="3" onChange={handleInput} placeholder="Any additional requests..."></textarea>
                    </div>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </section>
        <ToastContainer />
        </>
    );
}

export default BookNow;
