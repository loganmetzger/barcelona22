import React, { useState } from "react";
import GuestList from "./RSVP/GuestList";
// import axios from "axios";
import RsvpForm from "./RSVP/RsvpForm";
import RsvpContext from "./RSVP/rsvpContext";

const Rsvp = (props) => {
  // const [guests, setGuests] = useState([])

  const apiUrl = "https://barcelona22.herokuapp.com/";
  // works for get, get/:id, and post

  return (
    <RsvpContext.Provider>
      <div className="rsvp">
        <RsvpForm />
        <GuestList />
      </div>
    </RsvpContext.Provider>
  );
};

export default Rsvp;
