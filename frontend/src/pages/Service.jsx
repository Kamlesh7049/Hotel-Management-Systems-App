import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../images/pic1.jfif'; // Adjust the path as needed
import pic2 from '../images/pic2.jfif';
import pic3 from '../images/pic3.jfif';
// import './Service.css'; // Uncomment if you have a CSS file for styles

const Service = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service pic1">
          <img src={pic1} alt="Single Rooms" style={{ width: '100%', borderRadius: '5px' }} />
          <h3>Single Rooms</h3>
          <p>Comfortable and spacious rooms for a luxurious stay.</p>
          <Link to="/booknow" className="cta newbtn">Book Now</Link>
        </div>
        <div className="service pic2">
          <img src={pic2} alt="Double Rooms" style={{ width: '100%', borderRadius: '5px' }} />
          <h3>Double Rooms</h3>
          <p>Comfortable and spacious rooms for a luxurious stay.</p>
          <Link to="/booknow" className="cta newbtn">Book Now</Link>
        </div>
        <div className="service pic3">
          <img src={pic3} alt="Luxury Rooms" style={{ width: '100%', borderRadius: '5px' }} />
          <h3>Luxury Rooms</h3>
          <p>Comfortable and spacious rooms for a luxurious stay.</p>
          <Link to="/booknow" className="cta newbtn">Book Now</Link>
        </div>
      </div>

      <div className="services-container">
        <div className="service">
          <h3>Free Wi-Fi</h3>
          <p>High-speed internet access for all guests.</p>
        </div>
        <div className="service">
          <h3>24/7 Support</h3>
          <p>Our support team is available round the clock.</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
