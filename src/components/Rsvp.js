import React, { useState } from "react";
import GuestList from "./RSVP/GuestList";
// import axios from "axios";
import RsvpForm from './RSVP/RsvpForm'

const Rsvp = (props) => {
  const [guests, setGuests] = useState([])

  return (
    <div className="rsvp">
      <RsvpForm guests={guests} setGuests={setGuests}/>
      <GuestList guests={guests} setGuests={setGuests} />
    </div>
  );
};

export default Rsvp;
