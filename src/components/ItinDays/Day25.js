import React from "react";
import Arrow from "../Arrow";
import "../../css/itinerary.css";
import ArrowItin from "../ArrowItin";
import {bullet} from './bulletpoint'

const platjador = {
  url: "https://hotelsitges.com/hotel-platjador/",
  text: "Hotel Platjador",
};

const mim = {
  url: "https://mimhotels.com/en/sitges/hotel-mim-sitges",
  text: "Hotel MiM",
};

const kalma = {
  url: "https://www.sercotelhoteles.com/hotel-kalma-sitges/",
  text: "Kalma Sitges",
};

const marcer = {
  url: "https://www.instagram.com/canmarcer_delapenya/",
  text: "Can Marcer de la Penya",
};

const sitges = {
  url: "https://www.instagram.com/canmarcer_delapenya/",
  text: "Sitges Recommendations",
};

const Day25 = (props) => {
  return (
    <div className="day">
      <h2 className="day-header">Wednesday May 25</h2>
      <h3 className="day-subheader">Can Marcer and Sitges</h3>
      <hr className="day-header-line" />

      <div className="intro25">
        <img
          src="https://www.sitgeshillsvillas.com/upload/P309-Slider_2.jpg"
          className="canmarcer-img"
          alt="Can Marcer de la Penya"
        />
        <div className="intro25-text">
          <p>
            Today we make our way south along the coastline to Sitges Spain.
            There are multiple modes of transport however we will be traveling
            by train. From the Sants train station in Barcelona, we will make
            the 35-minute train ride into Sitges where we will catch a cab to
            Can Marcer, our wedding venue. If you are staying in downtown Sitges
            at one of our suggested hotels, you will debark at Sitges, the
            Rodalies de Catalunya station, and either walk or cab to your hotel
            of choice by the beach. Please take today at your own speed and be
            mindful of your hotel's check-in time so you don't arrive too early
            in the day.
          </p>
          <p>
            Many of you will be arriving in Spain today, so we expect to spend
            the day fairly relaxed in Sitges or at the Can Marcer. Feel free to
            explore the town as you wish!
          </p>
          <Arrow info={marcer} />
        </div>
      </div>

      <hr className="day-header-line" />

      <div className="sitges-info">
        <div className="sitges-text">
          <div className="sitges-hotels">
            <h4>Hotel Recommendations in Sitges:</h4>
            <Arrow info={platjador} />
            <Arrow info={mim} />
            <Arrow info={kalma} />
            <p>
              There are many more hotels as well! Feel free to do some of your
              own research and find what makes sense for you!
            </p>
          </div>

          <div className="sitges-gen">
            <h4>Things to do in Sitges:</h4>
            <ul>
              <li>
                {bullet} Enjoy the beautiful beaches and stroll along the Passeig Maritim.
              </li>
              <li>
              {bullet} Check out the historical old town and the quaint atmosphere.
              </li>
              <li>
              {bullet} Venture into Garraf National Park to enjoy some time in nature.
                There is plenty of hiking and biking to be done here, so if a
                day on your feet sounds fun then this is for you.
              </li>
            </ul>
            <Arrow info={sitges}/>
          </div>
        </div>

        <img
          src="https://utopia-villas.com/wp-content/uploads/2018/06/sitges_1.jpg"
          alt="Sitges"
          className="sitges-pic"
        />
      </div>

      <hr className="day-header-line" />

      <div className="potluck">
        <h4>Potluck Dinner Together at Can Marcer</h4>
        <p>
          Although most of today will be our transition from Barcelona to
          Sitges, please come to our masia, Can Marcer de la Penya, for dinner
          this evening at 7pm, local time. For tonight, we are doing a
          'pot-luck' dinner. If you'd like to come to dinner, please grab one
          interesting-looking food item from any store you see. Whether it's a
          loaf of bread, a few tapas, or just some tomatoes, bring it to the
          masia at 7pm and we will turn our ingredients/foods into a delicious
          meal! Stay as late into the evening as you'd like as we are just 15
          minutes away from your hotel.
        </p>
        <p>
          This will be a BYOB night, so pick out your favorite bottle of wine or
          bring along a nice cocktail, it's up to you!
        </p>
      </div>
      <ArrowItin />
    </div>
  );
};

export default Day25;
