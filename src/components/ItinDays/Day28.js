import React from "react";
import "../../css/itinerary.css";

const Day28 = (props) => {
  return (
    <div className="day">
      <h2 className="day-header">May 28</h2>
      <h3 className="day-subheader">The Main Event!</h3>
      <hr className="day-header-line" />

      <div>
        <h4>Preparations</h4>
        <p>
          During most of the day we will be making final preparations. If you
          would like to join to help out you're more than welcome. However
          you're also encouraged to spend time exploring the area on your own.
        </p>
      </div>

      <div>
        <h4>Festivities</h4>
        <p>
          At 4:30PM a bus will be waiting in Sitges for everyone to hop aboard
          and head to the venue.
        </p>
        <p>
          5:00PM we will begin cocktail time and have some light appetizers for
          everyone to enjoy
        </p>
        <p>6:30PM First look and pictures</p>
        <p>7:00PM Walk out with Guitarist Performance</p>
        <p>7:30PM Pictures</p>
        <p>8:00PM Paella dinner and more tapas</p>
        <p>9:00PM Speeches</p>
        <p>
          11:30PM Bus departure back to Sitges (for those not staying at Can
          Marcer)
        </p>
      </div>
    </div>
  );
};

export default Day28;
