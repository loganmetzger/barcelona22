import React from "react";
import festival from '../../images/festival.JPG'
import "../../css/itinerary.css";

const Day29 = (props) => {
  return (
    <div className="day">
      <h2 className="day-header">May 29</h2>
      <h3 className="day-subheader">Cleanup and Beach Day</h3>
      <hr className="day-header-line" />

      <div className='free29'>
        <img src={festival} alt='Us at a thai festival' className='festival' />
        <div className='free29-text'>
          <h4>After the Party</h4>
          <p>
            Today we will be doing some cleanup at the venue and relaxing. We
            appreciate any help that you all might be willing to lend and would
            love to enjoy everyones company for our final day together.
          </p>
          <p>
            We anticpate that some folks will have to depart today, and we wish
            you safe travels on your journey home
          </p>
        </div>
      </div>
    </div>
  );
};

export default Day29;
