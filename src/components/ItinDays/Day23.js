import React from "react";
import "../../css/itinerary.css";
import longSagrada from "../../images/long-sagrada.jpg";
import Arrow from "../Arrow";
import ArrowItin from '../ArrowItin'

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
            We anticipate some of you will fly in prior to Monday but in the off
            chance that today is your first day in Spain - Bienvenidos a Espana!
            Today will be a relatively relaxing first day but it's always
            important to fight jet lag with movement and hydration. Our
            intention is to roam downtown Barcelona on foot, take an afternoon
            siesta, and then push through the evening sleepiness with dinner and
            drinks.
          </p>
          <br />
          <p>
            Of course if you do need that downtime after your flight, take it!
            If you would like to join in some lovely meandering, we will be
            heading to the Gothic Quarter of the city. In the heart of
            Barcelona’s Old Town, or Ciutat Vella, lies the Gothic Quarter, one
            of the oldest parts of the city with remains dating back to medieval
            and even Roman times. Labyrinthine streets wind around a mix of
            ancient and modern buildings, opening onto bustling plazas filled
            with quaint cafes. Among the cobbled streets sit several interesting
            buildings and museums, among them the Barcelona City History Museum,
            The Picasso Museum, Barcelona’s Cathedral and the Basilica of Santa
            Maria del Mar. If you have any interest in visiting the Picasso
            museum, tickets are 20E a piece and can be pre-purchased.
          </p>
          <div className="free23-links">
            <Arrow info={picasso} />
            <Arrow info={beaches} />
            <Arrow info={shopping} />
            <Arrow info={gothic} />
          </div>
        </div>
      </div>
      <hr className="day-header-line free23-line" />
      <div className="dinner23">
        <h4>In the Evening</h4>
        <p>
          At 8PM we will be meeting at El Nacional for dinner and drinks with
          anyone who has arrived in the city and would like to join. No
          reservation necessary.
        </p>
        <br />
        <p>
          Cocktails to follow at Rosa Negra, Bobby's Free, and Paradiso. These
          are all small and fun cocktail lounges, so expect to try some
          interesting drinks with good company.
        </p>
        <div className="dinner23-bars">
          <Arrow info={nacional} />
          <Arrow info={rosa} />
          <Arrow info={bobby} />
          <Arrow info={paradiso} />
        </div>
        <img
          src={longSagrada}
          alt="sagrada familia interior"
          className="long-sagrada"
        />
      </div>
      <ArrowItin />
    </div>
  );
};

export default Day23;
