import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Rocky's Cornerstore</p>
    </footer>
  );
};

// CSS styles
const footerStyle = {
  backgroundColor: "#f5d76e", 
  color: "#333333", 
  textAlign: "center",
  padding: "10px",
};

export default Footer;
