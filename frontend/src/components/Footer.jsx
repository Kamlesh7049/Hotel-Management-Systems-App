const Footer = () => {
    return (
      <>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 SheyRooms Hotel Pvt Ltd. All Rights Reserved.</p>
{/*                */}
            <p>
              <a href="mailto:info@company.com">info@sheyrooms.com</a> | 
              <a href="https://www.company.com" target="_blank" rel="noreferrer"> www.sheyrooms.com</a>
            </p>
          </div>
        </footer>
  
        <style jsx>{`
          .footer {
            background-color: #343a40;
            color: white;
            padding: 5px 0;
            text-align: center;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 1000; /* Ensures it stays above other elements */
          }
  
          .footer p {
            margin: 5px 0;
            font-size: 1rem;
          }
  
          .footer a {
            color: #ffc107;
            text-decoration: none;
            margin: 0 10px;
            transition: color 0.3s ease;
          }
  
          .footer a:hover {
            color: #fff;
          }
  
          @media screen and (max-width: 768px) {
            .footer {
              font-size: 0.9rem;
            }
          }
        `}</style>
      </>
    );
  };
  
  export default Footer;
  
