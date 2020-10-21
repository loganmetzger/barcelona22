import React from "react";
import "../../css/itinerary.css";
import longSagrada from '../../images/long-sagrada.jpg'
import Arrow from "../Arrow";

const picasso = {
  url: "http://www.museupicasso.bcn.cat/",
  text: "Picasso Museum",
};

const beaches = {
  url: "http://www.museupicasso.bcn.cat/",
  text: "Barcelona Beaches",
};

const shopping = {
  url: "https://barcelonapaseodegracia.com/en//",
  text: "Shopping at Passieg de Gracia",
};

const gothic = {
  url:
    "https://www.tripadvisor.com/Attraction_Review-g187497-d190162-Reviews-Gothic_Quarter_Barri_Gotic-Barcelona_Catalonia.html",
  text: "The Gothic Quarter",
};

const nacional = {
  url: "https://www.elnacionalbcn.com/",
  text: "El Nacional",
};

const rosa = {
  url: "https://www.facebook.com/rosanegrabcn/",
  text: "Rosa Negra",
};

const bobby = {
  url: "http://www.bobbysfree.com/en/",
  text: "Bobby's Free",
};

const paradiso = {
  url: "https://paradiso.cat/en/",
  text: "Paradiso",
};

const Day23 = (props) => {
  return (
    <div className="day">
      <h2 className="day-header">Monday May 23</h2>
      <h3 className="day-subheader">Arrival in Barcelona</h3>
      <hr className="day-header-line" />

      <div className="free23">
        <div className="free23-text">
          <h4>Welcome to Barcelona!</h4>
          <p>
            Most flights will be arriving mid morning today in Barcelona. Feel
            free to spend the daytime as you wish until we meet with everyone
            this evening for drinks and dinner. There is a huge amount to see
            and do within the city, and we definitely recommend exploring the
            things that interest you the most. Listed below are links to some
            highlights we won't be seeing as a group.
          </p>
          <ul className="free23-links">
            <li>
              <Arrow info={picasso} />
            </li>
            <li>
              <Arrow info={beaches} />
            </li>
            <li>
              <Arrow info={shopping} />
            </li>
            <li>
              <Arrow info={gothic} />
            </li>
          </ul>
        </div>
      </div>
      <hr className="day-header-line free23-line" />
      <div className='dinner23'>
        <h4>In the Evening</h4>
        <p>
          At 8PM we will be meeting at El Nacional for dinner and drinks with
          anyone who has arrived in the city and would like to join. No
          reservation necessary.
        </p>
        <br />
        <p>
          Cocktails to follow at Rosa Negra, Bobby's Free, and Paradiso. These are all small
          and fun cocktail lounges, so expect to try some interesting drinks
          with good company.
        </p>
        <div className='dinner23-bars'>
          <Arrow info={nacional}/>
          <Arrow info={rosa}/>
          <Arrow info={bobby}/>
          <Arrow info={paradiso}/>
        </div>
        <img src={longSagrada} alt='sagrada familia interior' className='long-sagrada' />
      </div>
    </div>
  );
};

export default Day23;
