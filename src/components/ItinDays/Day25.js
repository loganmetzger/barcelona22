import React from "react";
import "../../css/itinerary.css";

const Day25 = (props) => {
  return (
    <div className="day">
      <h2 className="day-header">May 25</h2>
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
            Today we will be checking into the Can Marcer de la Penya in Sitges.
            This will be the venue for the wedding, and our home base over the
            next few days.
          </p>
          <p>
            Lot's of people will likely be arriving in Spain today, so we've
            left today as a beach day in Sitges to explore and hang out. This is
            a wonderful town full of lively restaurants/bars, and history
          </p>
        </div>
      </div>

      <div className="sitges-info">
        <div className="sitges-hotels">
          <h4>Hotel Recommendations in Sitges:</h4>
          <ul>
            <li>
              <a href="">Hotel Platjador</a>
            </li>
            <li>
              <a href="">Hotel MiM</a>
            </li>
            <li>
              <a href="">Kalma Sitges</a>
            </li>
          </ul>
          <p>
            There are many more hotels as well! Feel free to do some of your own
            research and find what makes sense for you!
          </p>
        </div>

        <div className="sitges-gen">
          <h4>Things to do in Sitges</h4>
          <p>Thing 1</p>
          <p>Thing 2</p>
          <p>Thing 3</p>
          <p>Thing 4</p>
        </div>
      </div>

      <div>
        <h4>Potluck Dinner Together at Can Marcer</h4>
        <p>
          Tonight we will all join up for dinner at Can Marcer! We will be
          grilling outside, but look forward to seeing what types of tapas you
          all bring with!
        </p>
        <p>
          This will be a BYOB night, so pick out your favorite bottle of wine or
          bring along a nice cocktail, it's up to you!
        </p>
      </div>
    </div>
  );
};

export default Day25;
