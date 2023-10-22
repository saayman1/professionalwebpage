import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgColor = "#f5f5f5";  // Change this for background color
  const textColor = "#191717";  // Change this for text color
  const bgStyle = { backgroundColor: bgColor };

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-sm-center">
      <Container>
        {props.children}
        Web template made by 
        <a
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
          style={{ color: textColor }} // Change text color here
        > 
          <span className="badge bg-light text-sm" style={{ color: textColor }}>
            Hashir Shoaib
          </span>
        </a>
      </Container>
    </footer>
  );
};
export default Footer;
