import React from "react";
import { Link } from "react-router-dom";
import logoName from '../images/logo-name.png'

const Nav = (props) => {
  return (
    <div className="nav">
      <img src={logoName} alt='names' className='logo-name'/>
      <div className="links">
        <Link className="navlink" to="/">
          Home
        </Link>
        <Link className="navlink" to="/about">
          About
        </Link>
        <Link className="navlink" to="/itinerary">
          Itinerary
        </Link>
        <Link className="navlink" to="/faqs">
          FAQs
        </Link>
        <Link className="navlink" to="/rsvp">
          RSVP
        </Link>
      </div>
    </div>
  );
};

export default Nav;
