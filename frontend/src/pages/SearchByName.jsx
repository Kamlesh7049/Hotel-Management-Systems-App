import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SearchByName = () => {
  const [mydata, setMydata] = useState([]); // Data state
  const [noRecordsFound, setNoRecordsFound] = useState(false); // Flag for "No records found"
  const location = useLocation(); // Get query parameters from the URL

  // Extract the query parameter "name" from the URL
  const searchParams = new URLSearchParams(location.search);
  const ename = searchParams.get('name') || ''; // Default to empty string if no query parameter

  useEffect(() => {
    console.log('Search query:', ename); // Debugging: check the value of ename

    if (ename.trim() === "") {
      setMydata([]); // Reset data if search term is empty
      setNoRecordsFound(false);
      return;
    }

    const api = `http://localhost:9000/users/usersearchbyname/?name=${name}`;
    axios
      .get(api)
      .then((res) => {
        const data = res.data;
        console.log('API Response Data:', data); // Debugging: check the API response

        // Check if data is valid and is an array
        if (data && Array.isArray(data)) {
          // Perform a case-insensitive filter on `key.name` and `ename`
          const matches = data.filter((key) => {
            // Ensure that `key.name` exists and is a string
            return key.name && key.name.toLowerCase().includes(ename.toLowerCase());
          });

          setMydata(matches); // Set the filtered data
          setNoRecordsFound(matches.length === 0); // No matches found
        } else {
          console.error('Invalid data format received from API:', data);
          setMydata([]); // Reset data if the format is unexpected
          setNoRecordsFound(true);
        }
      })
      .catch((err) => {
        console.error("Error fetching data", err);
        setMydata([]); // Reset data on error
        setNoRecordsFound(true); // Show "No records found" in case of an error
      });
  }, [ename]); // Runs when `ename` changes

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h4 style={{ color: "black" }}>Search User Records!</h4><br /><br />
      
      {mydata.length > 0 ? (
        <table
          style={{
            width: "80%",
            margin: "0 auto",
            borderCollapse: "collapse",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          }}
        >
          <thead style={{ backgroundColor: "#f8f9fa" }}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>RoomType</th>
              <th>Check-in</th>
              <th>Check-out</th>
            </tr>
          </thead>
          <tbody>
            {mydata.map((key) => (
              <tr key={key.name}>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.mobile}</td>
                <td>{key.roomType}</td>
                <td>{key.checkIn}</td>
                <td>{key.checkOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        noRecordsFound && ename.trim() !== "" && (
          <p style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}>
            No records found
          </p>
        )
      )}
    </div>
  );
};

export default SearchByName;
