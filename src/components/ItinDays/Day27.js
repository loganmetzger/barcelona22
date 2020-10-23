import React from "react";
import "../../css/itinerary.css";
import Arrow from "../Arrow";
import beach from "../../images/beachday.jpg";
import catamaran from "../../images/catamaran.jpg";
import bbq from "../../images/bbq.jpg";
import ArrowItin from "../ArrowItin";

const freetime = {
  url: "",
  text: "Free time recommendations",
};

const Day27 = (props) => {
  return (
    <div className="day">
      <h2 className="day-header">Friday May 27</h2>
      <h3 className="day-subheader">Free Day and Catamaran Ride</h3>
      <hr className="day-header-line" />

      <div className="catamaran">
        <img src={catamaran} alt="catamaran" className="cat-img" />
        <div className="catamaran-text">
          <h4>Catamaran Ride</h4>
          <p>
            Welcome to Thursday festivities! As it is late May in northeastern
            Spain, today will be filled with sweet sunshine - make sure to pack
            your sunscreen! In the late morning, a bus will first come to Can
            Marcer and then onto Sitges to pick up guests to head into Port
            Veil, Barcelona, to board our catamaran for the day. Wear your
            swimsuit as we will be out here for a few hours swimming and
            enjoying the Barcelona coastline.
          </p>
        </div>
      </div>

      <hr className="day-header-line" />

      <div className="free27">
        <img src={beach} alt="sitges beaches" className="free27-img" />
        <div className="free27-text">
          <h4>Free Time</h4>
          <p>
            In the afternoon, we will journey back to Sitges for some downtime.
            Take a siesta and relax for a few hours before reconvening at Can
            Marcer at 7:30pm, local time.
          </p>
          <p>
            Feel free to remain in Barcelona for the afternoon if you would like
            to see more of the city. You will have to make your own way back to
            Sitges for the evening BBQ.
          </p>
          <Arrow info={freetime} />
        </div>
      </div>

      <div className="bbq">
        <div className="bbq-text">
          <h4>Barbeque</h4>
          <p>
            We will be hosting a barbeque on the property for everyone to enjoy!
            The wedding festivities will not be particularly traditional so in
            lieu of a rehearsal dinner, we want absolutely everyone to come and
            enjoy a cocktail party and barbeque tonight. Make your way to and
            from Can Marcer independently - we will call tonight an early one so
            make sure you finish your cocktail and dinner by about 10pm.
          </p>
        </div>
        <img src={bbq} className="bbq-img" alt="bbq" />
      </div>
      <ArrowItin />
    </div>
  );
};

export default Day27;
