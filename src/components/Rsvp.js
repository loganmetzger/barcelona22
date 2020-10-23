import React from "react";
// import axios from "axios";
import RsvpForm from "./RSVP/RsvpForm";


const Rsvp = (props) => {
  // const [guests, setGuests] = useState([])

  // const apiUrl = "https://barcelona22.herokuapp.com/";
  // works for get, get/:id, and post

  return (
      <div className="rsvp">
        <RsvpForm />
      </div>
  );
};

export default Rsvp;
