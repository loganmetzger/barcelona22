import React from "react";
import Arrow from "../Arrow";
import "../../css/itinerary.css";
import sagrada from "../../images/sagrada.jpg";
import barcBeach from "../../images/barc-beach.jpg";
import { bullet } from "./bulletpoint";
import ArrowItin from "../ArrowItin";

const mila = {
  url: "google docs",
  text: "Casa Mila",
};

const passeig = {
  url: "google docs",
  text: "Passieg de Gracia",
};

const parc = {
  url: "google docs",
  text: "Parc de la Ciutadella",
};

const tibidabo = {
  url: "google docs",
  text: "Mount Tibidabo",
};

const plaza = {
  url: "google docs",
  text: "Plaza Reial",
};

const rambla = {
  url: "google docs",
  text: "La Rambla",
};

const Day24 = (props) => {
  return (
    <div className="day">
      <h2 className="day-header">Tuesday May 24</h2>
      <h3 className="day-subheader">Barcelona Art and City</h3>
      <hr className="day-header-line" />

      <div className="tour24">
        <p>
          It’s rare that a single person can have as much impact on the
          landscape of a city as Antoni Gaudí did from lowly lampposts to the
          sprawling environs of Parc Guell that all owe their origins to his
          masterful design. Today we will explore the city from a Gaudí
          perspective.
        </p>

        <div className="sagrada">
          <div className='sagrada-text'>
            <h4>Sagrada Familia</h4>
            <p>
              We will begin the morning with a walk (or metro ride) to the
              Sagrada Familia, meeting there at 10AM. You can explore the
              confines of the gorgeous structure but the wait can be upwards of
              4 hours. Our intention is to take in the exterior of this
              awe-inspiring masterpiece and then board the closest metro to our
              next stop on the Gaudi tour, Parc Guell.
            </p>
          </div>
          <img
            src={sagrada}
            alt="The Sagrada Familia"
            className="sagrada-img"
          />
        </div>

        <div className="parcguell">
          <div className='parcguell-text'>
            <h4>Parc Guell</h4>
            <p>
              With gorgeous views of downtown, Parc Guell is a sublime place to
              sip an espresso, walk trails, and take in some natural beauty
              within the confines of Barcelona.
            </p>
          </div>
          <img
            src="https://skiptheline.tickets/wp-content/uploads/2017/05/shutterstock_552368572-1.jpg"
            alt="Parc Guell"
            className="parcguell-img"
          />
        </div>
        <hr className="day-header-line" />
        <div className="free24">
          <p>
            From Parc Guell, the wind will take us all in different directions.
            Suggestions are as follows:
          </p>
          <ul>
            <li>
              {bullet} If you are getting a hankering for more Gaudi, I would
              highly recommend Casa Mila, better known as La Pedrera for its
              phallic protrusions from the stone roof.
            </li>
            <li>
              {bullet} Just adjacent to the gorgeous Pedrera is the Cr. Passeig
              de Gracia. This street is renowned for its world-class shopping
              and restaurants and if you're looking to bring home clothing from
              Spain, this is the street to explore.
            </li>
            <li>
              {bullet} For a beautiful park nearby the waterfront, head in the
              direction of the Sagrada Familia to the Parc de la Ciutadella.
              That would be a fun place for a picnic lunch or a run! With
              gorgeous statues and fountains, this can be a truly inspiring
              place for a workout or some R&R.
            </li>
            <li>
              {bullet} Lastly, if you're full of energy and adventure, Mount
              Tibidabo is for you. From Parc Guell you can see Tibidabo, a
              mountain just a short distance away from the city. This mountain
              is home to one of the cities most beautiful churches as well as a
              small theme park! Catch an uber or cab to the base and hike to the
              top, or catch a ride all the way up on the funicular.
            </li>
          </ul>
          <p>
            Whatever you choose to pursue in your free time, I promise it won't
            disappoint - there is so much to explore in this city! Check out the
            links below to find more information.
          </p>
          <div className="free24-links">
            <Arrow info={mila} />
            <Arrow info={passeig} />
            <Arrow info={parc} />
            <Arrow info={tibidabo} />
          </div>
        </div>
        <hr className="day-header-line" />
        <div className="evening24">
          <div className="reial">
            <div>
              <h4>La Rambla</h4>
              <p>
                In the evening we will reconvene on the famous street of La
                Rambla. About 0.5 mi down street from Plaza Catalunya is the
                Plaza Reial from which palm trees sprout and gin and tonics pour
                freely. We will meet at the plaza near the fountain at 8pm,
                local time, and will select a restaurant from the many within
                the plaza. From there we will see where the night takes us!
              </p>
            </div>
            <img
              src="https://barcelona-home.com/blog/wp-content/upload/2013/10/placa-reial.jpg"
              alt="Plaza Reial"
              className="reial-img"
            />
          </div>
          <div className="night24">
            <div className="night24-links">
              <Arrow info={plaza} />
              <Arrow info={rambla} />
            </div>
            <div className="night24-imgs">
              <img
                src="https://www.saba.es/documents/31936/482102/pi019-1600x900.jpg/64aaf66e-e40d-fea3-3101-5fd307696028?version=1.0&t=1528897230318&imagePreview=1"
                alt="La Rambla"
                className="rambla-img"
              />
              <img src={barcBeach} alt="Beach" className="barcbeach-img" />
            </div>
          </div>
        </div>
      </div>
      <ArrowItin />
    </div>
  );
};

export default Day24;
