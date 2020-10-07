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

  console.log(guests)

  return (
    <div className="guestlist">
      <p>Guests</p>
      {guests &&
        guests.map((guest) => {
          return <Guest key={guest.id} guest={guest} />
        })}
    </div>
  );
};

export default GuestList;
