import React from "react";
import "../../css/itinerary.css";

const Day24 = (props) => {
  return (
    <div className="day">
      <h2 className="day-header">May 24</h2>
      <h3 className="day-subheader">Barcelona Art and City</h3>
      <hr className="day-header-line" />

      <div>
        <h4>
          Today we will be touring through some of the famous cultural and
          historical landmarks of Barcelona
        </h4>

        <div>
          <p>
            We will be meeting at the Sagrada Familia at 10AM today to start
            things off. This famous cathedral has been under construction for
            almost 100 years and is one of the most recognizable sites in the
            city.
          </p>
          <p>
            We don't intend to go insider(the wait can be quite long) but feel
            free to do so independently
          </p>
        </div>

        <div>
          <p>
            Next up is Parc Guell. Another architectural wonder by the famous
            Gaudi.
          </p>
        </div>

        <div>
          <p>Tibidabo</p>
        </div>

        <div>
          <p>Plaza Espana</p>
        </div>
      </div>
    </div>
  );
};

export default Day24;
