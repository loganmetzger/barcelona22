import React from "react";
import "../../css/itinerary.css";
import Arrow from "../Arrow";
import beach from "../../images/beachday.jpg";
import catamaran from '../../images/catamaran.jpg'
import bbq from  '../../images/bbq.jpg'

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

      <div className="free27">
        <img src={beach} alt="sitges beaches" className="free27-img" />
        <div className="free27-text">
          <h4>Free Time</h4>
          <p>
            Today we will be enjoying Sitges and generally relaxing and getting
            things ready for the event tomorrow. There's plenty to do around
            here ranging from hitting the beach to enjoying the gorgeous Parque
            Garrafalo.
          </p>
          <p>
            Barcelona is only a 30 minute drive away, so if there's things you'd
            like to see or do in the city it's easy to make your way there via
            cab.
          </p>
          <Arrow info={freetime} />
        </div>
      </div>

      <hr className="day-header-line" />

      <div className="catamaran">
        <img src={catamaran} alt="catamaran" className="cat-img" />
        <div className="catamaran-text">
          <h4>Catamaran Ride</h4>
          <p>
            This evening close to sunset we will be taking a Catamran ride into
            the Mediterranian. Bring your suits and look forward to exploring
            the wonderful blue waters
          </p>
        </div>
      </div>

      <div className="bbq">
        <div className="bbq-text">
          <h4>Barbeque</h4>
          <p>
            We will be having an evening BBQ at the Can Marcer tonight to relax
            and enjoy everyones company before the event tomorrow!
          </p>
        </div>
        <img src={bbq} className='bbq-img' alt='bbq' />
      </div>
    </div>
  );
};

export default Day27;
