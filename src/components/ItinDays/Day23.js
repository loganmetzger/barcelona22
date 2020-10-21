import React from "react";
import barcelona from '../../images/barcelona.jpg'
import "../../css/itinerary.css";

const Day23 = (props) => {
  return (
    <div className="day">
      <h2 className="day-header">Monday May 23</h2>
      <h3 className="day-subheader">Arrival in Barcelona</h3>
      <hr className="day-header-line" />

      <div className="free23">
        <div className='free23-text'>
          <h4>Welcome to Barcelona!</h4>
          <p>
            Most flights will be arriving mid morning today in Barcelona. Feel
            free to spend the daytime as you wish until we meet with everyone
            this evening for drinks and dinner. There is a huge amount to see
            and do within the city, and we definitely recommend exploring the
            things that interest you the most. A couple highlights that we won't
            be doing as a group have been listed below.
          </p>
          <p>Suggested for free time:</p>
          <ul>
            <li>
              <a href="http://www.museupicasso.bcn.cat/">Picasso Museum</a>
            </li>
            <li>Exploring the beaches of Barcelona</li>
            <li>Passieg de Gracia - Shopping</li>
            <li>Exploring the Gothic Quarter</li>
            <li>Relaxing at your hotel after a day of travel!</li>
          </ul>
        </div>
        <div className='free23-img'>
          <img src={barcelona} alt='barcelona' className='free23-img'/>
        </div>
      </div>

      <div>
        <p>
          At 8PM we will be meeting at{" "}
          <a href="https://www.elnacionalbcn.com/">El Nacional</a> for dinner
          and drinks with anyone who has arrived in the city and would like to
          join. No reservation necessary.
        </p>
        <p>
          Cocktails to follow at{" "}
          <a href="https://www.facebook.com/rosanegrabcn/">Rosa Negra</a>,{" "}
          <a href="http://www.bobbysfree.com/en/">Bobby's Free</a>, and{" "}
          <a href="https://paradiso.cat/en/">Paradiso</a>. These are all small
          and fun cocktail lounges, so expect to try some interesting drinks
          with good company.
        </p>
      </div>
    </div>
  );
};

export default Day23;
