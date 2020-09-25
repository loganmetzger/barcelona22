import React from "react";
import elephants from  '/Users/loganmetzger/Documents/wedding22/barcelona22/src/images/elephants.JPG'

const About = (props) => {
  return (
    <div className="about">
      <div className='abouttext'>
        <div className='aboutsec'>
          <h3>About</h3>
          <p>
            We chose to have our wedding in a beautiful location with the people
            we love. Enjoy some time and wine with us in Spain
          </p>
        </div>
        <div className='aboutsec'>
          <h3>Barcelona</h3>
          <p>Pretty city, lots to do and see</p>
        </div>
        <div className='aboutsec'>
          <h3>Sitges</h3>
          <p>
            Located down the coast from Barcelona, this beach town has a vibrant
            night life and incredible vistas
          </p>
        </div>
        <div className='aboutsec'>
          <h3>The Venue</h3>
          <p>Gorgeous, luxe, fucking awesome</p>
        </div>
      </div>
      <div className='elephant'>
        <img src={elephants} alt='deckpick' />
      </div>
    </div>
  );
};

export default About;
