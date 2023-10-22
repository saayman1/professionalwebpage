import React from 'react';
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt={data.company} /> {/* Added the company name as alt text for the image */}
        <p className="lead">
          {data.role}
          <br />
          {data.company} {/* This line displays the company name */}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
}

export default ExperienceCard;
