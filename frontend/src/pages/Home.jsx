import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import A from "../images/img1.jpg";
import B from "../images/img2.jpg";
import C from "../images/img3.jfif";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={A} width="1550" height="680" alt="Slide 1" />
          <Carousel.Caption className="carousel-caption">
            <h3>Welcome to Our Hotel Booking Service</h3>
            <p>Your comfort is our priority.</p>
            <Link to="/booknow">
              <button style={{ backgroundColor: "pink", borderRadius: "30px" }}>
                Book Now
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={B} width="1550" height="680" alt="Slide 2" />
          <Carousel.Caption className="carousel-caption">
            <h3>Welcome to Our Hotel Booking Service</h3>
            <p>Your comfort is our priority.</p>
            <Link to="/booknow">
              <button style={{ backgroundColor: "pink", borderRadius: "30px" }}>
                Book Now
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={C} width="1550" height="680" alt="Slide 3" />
          <Carousel.Caption className="carousel-caption">
            <h3>Welcome to Our Hotel Booking Service</h3>
            <p>Your comfort is our priority.</p>
            <Link to="/booknow">
              <button style={{ backgroundColor: "pink", borderRadius: "30px" }}>
                Book Now
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
