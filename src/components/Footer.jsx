import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgColor = "#f5f5f5";  // Change this for background color
  const textColor = "#d7d4d4";  // Change this for text color
  const bgStyle = { backgroundColor: bgColor };

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-sm-center">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
          style={{ color: textColor }} // Change text color here
        > 
          <span className="badge bg-dark text-sm" style={{ color: textColor }}>
            Hashir Shoaib
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted" style={{ color: textColor }}>
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
