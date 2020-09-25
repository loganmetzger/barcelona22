import React from "react";
import { Link } from "react-router-dom";



const Nav = (props) => {
  return (
    <div className='nav'>
        <Link className='navlink' to='/'>
            Home
        </Link>
        <Link className='navlink' to='/about'>
            About
        </Link>
        <Link className='navlink' to='/itinerary'>
            Itinerary
        </Link>
        <Link className='navlink' to='/faqs'>
            FAQs
        </Link>
        <Link className='navlink' to='/rsvp'>
            RSVP
        </Link>
    </div>
  );
};

export default Nav;
