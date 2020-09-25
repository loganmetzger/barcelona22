import React, { useEffect } from "react";
import axios from "axios";

const GuestList = (props) => {
  const { guests, setGuests } = props;

  const getGuests = () => {
    axios
      .get("url")
      .then((res) => {
        setGuests(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getGuests();
  }, []);

  return (
    <div className="guestlist">
      <p>Guests</p>
      {guests &&
        guests.map((guest) => {
          return <h5>{guest}</h5>;
        })}
    </div>
  );
};

export default GuestList;
