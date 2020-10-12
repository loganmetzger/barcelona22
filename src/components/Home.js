import React from "react";
import logo from '../images/logo.png'

const Home = (props) => {
  return (
    <div className="home">
      <div className='homebox'>
        <img src={logo} alt='Sam and Logan' className='logo'/>
      </div>
    </div>
  );
};

export default Home;
