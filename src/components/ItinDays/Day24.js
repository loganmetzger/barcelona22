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
          Today we will be touring through some of the famous cultural and
          historical landmarks of Barcelona. We will be meeting at 10AM to begin
          the touring, and you will be responsible for your own transportation.
          There's plenty of cabs and Ubers throughout the city so finding a ride
          will be quite easy.
        </p>

        <div className="sagrada">
          <div>
            <p>
              We will be meeting at the Sagrada Familia at 10AM today to start
              things off. This famous cathedral has been under construction for
              almost 100 years and is one of the most recognizable sites in the
              city.
            </p>
            <p>
              We don't intend to go inside (the wait can be up to 4 hours) but
              feel free to do so independently
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
            Next up is Parc Guell. Another architectural wonder by the famous
            Gaudi.
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
            After the adventures this morning you'll have the afternoon to spend
            exploring Barcelona on your own. Included below is a list of
            recommendations of things to do, however we encourage you to find
            whatever sounds best!
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
              of things to do for the evening.
              This area abutts La Rambla and the beach, so there will be plenty
              of things to do for the evening.
              This area abutts La Rambla and the beach, so there will be plenty
              of things to do for the evening.
              This area abutts La Rambla and the beach, so there will be plenty
              of things to do for the evening.
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
