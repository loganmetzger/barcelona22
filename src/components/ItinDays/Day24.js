import React from "react";
import Arrow from "../Arrow";
import "../../css/itinerary.css";
import sagrada from "../../images/sagrada.jpg";
import barcBeach from "../../images/barc-beach.jpg";

const freetime = {
  url: "google docs",
  text: "Free time suggestions",
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
          <div>
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
          <p>
            With gorgeous views of downtown, Parc Guell is a sublime place to
            sip an espresso, walk trails, and take in some natural beauty within
            the confines of Barcelona.
          </p>
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
            <ul>Suggestions are as follows:</ul>
            <li>
              If you are getting a hankering for more Gaudi, I would highly
              recommend Casa Mila, better known as La Pedrera for its phallic
              protrusions from the stone roof.
            </li>
            <li>
              Just adjacent to the gorgeous Pedrera is the Cr. Passeig de
              Gracia. This street is renowned for its world-class shopping and
              restaurants and if you're looking to bring home clothing from
              Spain, this is the street to explore.
            </li>
            <li>
              For a beautiful park nearby the waterfront, head in the direction
              of the Sagrada Familia to the Parc de la Ciutadella. That would be
              a fun place for a picnic lunch or a run! With gorgeous statues and
              fountains, this can be a truly inspiring place for a workout or
              some R&R.
            </li>
            <li>
              Lastly, if you're full of energy and adventure, Mount Tibidabo is
              for you. From Parc Guell you can see Tibidabo, a mountain just a
              short distance away from the city. This mountain is home to one of
              the cities most beautiful churches as well as a small theme park!
              Catch an uber or cab to the base and hike to the top, or catch a
              ride all the way up on the funicular.
            </li>
          </p>
          <Arrow info={freetime} />
        </div>
        <hr className="day-header-line" />
        <div className="evening24">
          <div className="reial">
            <p>
              Tonight we will be meeting up at the Plaza Reial to get some
              dinner, and all of you are welcome to join! There's plenty of
              little shops and food stalls to check out here, so you'll be sure
              to find something you enjoy.
            </p>
            <img
              src="https://barcelona-home.com/blog/wp-content/upload/2013/10/placa-reial.jpg"
              alt="Plaza Reial"
              className="reial-img"
            />
          </div>
          <div className="night24">
            <p>
              This area abutts La Rambla and the beach, so there will be plenty
              of things to do for the evening. This area abutts La Rambla and
              the beach, so there will be plenty of things to do for the
              evening. This area abutts La Rambla and the beach, so there will
              be plenty of things to do for the evening. This area abutts La
              Rambla and the beach, so there will be plenty of things to do for
              the evening.
            </p>
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
    </div>
  );
};

export default Day24;
