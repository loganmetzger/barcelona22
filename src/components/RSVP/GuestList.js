import React, { useState, useEffect } from "react";
import Guest from './Guest'
import axios from "axios";

const GuestList = () => {
  const [guests, setGuests] = useState([])

  useEffect(() => {
    axios.get('https://barcelona22.herokuapp.com/rsvps')
    .then(res => {
      setGuests(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <div className="guestlist">
      <h3>Guests</h3>
      {guests &&
        guests.map((guest) => {
          return <Guest key={guest.id} guest={guest} />
        })}
    </div>
  );
};

export default GuestList;
