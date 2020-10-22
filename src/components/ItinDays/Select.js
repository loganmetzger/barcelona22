import React from "react";
import "../../css/itinerary.css";
import nepal2 from "../../images/nepal2.JPG";

const Select = (props) => {
  return (
    <div className="day">
        <h2 className="day-header">Select your day from the side menu</h2>
        <h3 className="day-subheader">We look forward to traveling with you!</h3>
        <hr className="day-header-line" />
        <img src={nepal2} alt="Its us!" className="select-img" />
    </div>
  );
};

export default Select;
