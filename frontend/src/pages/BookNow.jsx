import React, { useState } from 'react';
// import './BookNow.css'; // Ensure you import your CSS file

const BookNow = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        roomType: '',
        checkIn: '',
        checkOut: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section id="booking">
            <h2>Book Your Room</h2>
            <form id="bookingForm" onSubmit={handleSubmit} className="booking-form">
                <div className="form-container">
                    <div className="form-section">
                        <h5>Personal Information</h5>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                        <label htmlFor="mobile">Mobile Number:</label>
                        <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
                    </div>

                    <div className="form-section">
                        <h5>Booking Details</h5>
                        <label htmlFor="roomType">Room Type:</label>
                        <select id="roomType" name="roomType" value={formData.roomType} onChange={handleChange} required>
                            <option value="">Select Room Type</option>
                            <option value="single">Single - ₹1000</option>
                            <option value="double">Double - ₹1500</option>
                            <option value="suite">Suite - ₹3000</option>
                        </select>

                        <label htmlFor="checkIn">Check-In:</label>
                        <input type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleChange} required />

                        <label htmlFor="checkOut">Check-Out:</label>
                        <input type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleChange} required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Any additional requests..."></textarea>
                    </div>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </section>
    );
}

export default BookNow;
