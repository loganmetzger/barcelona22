import React from "react";
import '../../css/itinerary.css'
import car from '../../images/car.jpeg'

const Day30 = (props) => {
  return (
    <div className="day">
      <h2 className="day-header">May 30</h2>
      <h3 className="day-subheader">Departure</h3>
      <hr className="day-header-line" />

      <div className='farewell-content'>
        <p>Today we will be checking out of the Can Marcer and headed on our way. We hope you have enjoyed your time with us in Spain celebrating out marriage!</p>
        <img src={car} alt='Us in Nepal' className='farewell-img' />
      </div>
    </div>
  );
};

export default Day30;
