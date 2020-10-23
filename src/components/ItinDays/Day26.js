import React from "react";
import "../../css/itinerary.css";
import montserrat from "../../images/montserrat.jpg";
import bars from "../../images/bars.jpg";
import ArrowItin from "../ArrowItin";

const Day26 = (props) => {
  return (
    <div className="day">
      <h2 className="day-header">Thursday May 26</h2>
      <h3 className="day-subheader">Montserrat, Cava Tour, and Night Out</h3>
      <hr className="day-header-line" />

      <div className="mont-container">
        <img src={montserrat} alt="Montserrat" className="mont-img" />
        <div className="mont-text">
          <h4>Montserrat</h4>
          <p>
            We will be meeting at TIME in PLACE to catch the bus for today's
            activities.
          </p>
          <br />
          <p>
            Today we will depart from Can Marcer for the Catalan countryside to
            the dramatic mountain of Montserrat. Rising majestically to 1,235 m
            (4,051 ft) above sea level, it’s a beautiful sight to behold. After
            winding our way up the hillside, we’ll reach the basilica complex,
            home to a particularly famous 12th-century Romanesque carving of the
            Virgin Moreneta, known as the Black Virgin. A Royal Basilica,
            Monserrat, has been one of the most important pilgrimage sites in
            Spain for hundreds of years and is a gorgeous place to visit outside
            Barcelona. We'll have a few hours here to explore at our own pace.
            You can, of course, choose to hike to the summit; however, you may
            want to take the tram to the top and hike down leisurely, taking in
            the sweeping panoramic views of the serene countryside and
            surrounding low-lying mountains below - I will most certainly be
            taking the hike!
          </p>
          <br />
          <p>There is a cafe with bathrooms on the mountain</p>
        </div>
      </div>

      <div className="cava">
        <div className="cava-text">
          <h4>Cava Tour at Codorniu</h4>
          <p>
            Departing from Montserrat, we’ll head through the Catalan
            countryside to the Penedès wine region, famous around the world for
            its production of fine cava sparkling wine. Originating from the
            word cave, in reference to the underground cellars in which it’s
            fermented, cava is produced in a very similar way to the Champagnes
            of France and boasts its own Denominación de Origen (DO) status.
            We'll make a lunch stop with spectacular views across the vineyards
            before we continue on to the Codorniu vineyards for an exclusive
            tour and tasting.
          </p>
        </div>
        <img
          src="https://www.rent-a-guide.com/public/images/tours/000/085/659_ragdefault.jpeg"
          className="cava-img"
          alt="Codorniu"
        />
      </div>

      <p className="free26">
        In the afternoon we'll head back to Sitges, which will take just about
        an hour. Take the rest of the daylight to enjoy the Sitges beach or the
        pool at Can Marcer!
      </p>

      <hr className="day-header-line" />

      <div className="bars">
        <h4>Bachelor/Bachelorette Parties</h4>
        <p>
          This evening brings our bachelor/bachelorette parties! We will keep
          everything relatively open for scheduling, at this point, but will
          pick some more evening adventures as we get closer to our departure
          date!
        </p>
        <img src={bars} alt="Bars" className="bars-img" />
      </div>
      <ArrowItin />
    </div>
  );
};

export default Day26;
