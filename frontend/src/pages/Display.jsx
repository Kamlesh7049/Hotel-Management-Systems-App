import React, { useEffect, useState } from 'react';

const Display = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Load bookings from local storage
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <section id="display">
      <h2>Booking List</h2>
      {bookings.length === 0 ? (
        <h4 style={{marginTop : "20px"}}>No bookings available.</h4>
      ) : (
        <table>
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
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.mobile}</td>
                <td>{booking.roomType}</td>
                <td>{booking.checkIn}</td>
                <td>{booking.checkOut}</td>
                <td>{booking.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Display;
