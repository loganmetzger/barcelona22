import React from "react";
import "../../css/itinerary.css";
import montserrat from "../../images/montserrat.jpg";
import bars from '../../images/bars.jpg'
import ArrowItin from '../ArrowItin'

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
            We will be meeting at 8:30AM today in Sitges at LOCATION to hop on
            the bus and head to Montserrat
          </p>
          <p>
            This imposing cathedral on a mountain outside Barcelona is a a
            fantastic place to explore and take in the history and views
          </p>
          <p>
            For those of you looking for an active day there is an option to do
            a small hike to the top, however there is also a cable car to the
            top if you'd like to enjoy the ride
          </p>
        </div>
      </div>

      <div className="cava">
        <div className="cava-text">
          <h4>Cava Tour at Codorniu</h4>
          <p>
            Cava is a Spanish sparkling wine, and easily one of the most famous
            brands is Cordoniu
          </p>
          <p>
            Join us as we explore the wonderful vineyard here and taste some of
            their delicious wares
          </p>
        </div>
        <img
          src="https://www.rent-a-guide.com/public/images/tours/000/085/659_ragdefault.jpeg"
          className="cava-img"
          alt="Codorniu"
        />
      </div>

      <hr className="day-header-line" />

      <div className='bars'>
        <h4>Bachelor/Bachelorette Parties</h4>
        <p>
          Tonight we are going to enjoy some time out! Sam and I will be
          splitting up for the night to do drinks and dinner as Bachelor and
          Bachelorette parties. We of course will be joining up again later in
          the evening, but look forward to a fun night of drinking and dancing!
        </p>
        <img src={bars} alt='Bars' className='bars-img' />
      </div>
      <ArrowItin />
    </div>
  );
};

export default Day26;
