import React from "react";
import "../../css/itinerary.css";
import engagement from "../../images/engagement.JPG";
import ArrowItin from "../ArrowItin";

const Day28 = (props) => {
  return (
    <div className="day">
      <h2 className="day-header">May 28</h2>
      <h3 className="day-subheader">The Main Event!</h3>
      <hr className="day-header-line" />

      <div className="event-container">
        <img src={engagement} alt="engagement" className="engagement" />
        <div className="timeline">
          <h4>Festivities</h4>
          <p>
            The schedule for the wedding is still being worked out. We'll be
            sure to update the schedule as soon as we can!
          </p>
          {/* <p>
            At 4:30PM a bus will be waiting in Sitges for everyone to hop aboard
            and head to the venue.
          </p>
          <p>
            5:00PM we will begin cocktail time and have some light appetizers
            for everyone to enjoy
          </p>
          <p>6:30PM First look and pictures</p>
          <p>7:00PM Walk out with Guitarist Performance</p>
          <p>7:30PM Pictures</p>
          <p>8:00PM Paella dinner and more tapas</p>
          <p>9:00PM Speeches</p>
          <p>
            11:30PM Bus departure back to Sitges (for those not staying at Can
            Marcer)
          </p> */}
        </div>
      </div>
      <ArrowItin />
    </div>
  );
};

export default Day28;
