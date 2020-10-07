import React from "react";

const Guest = (props) => {
  const { guest } = props;

  return (
    <div>
      <p>{guest.name}</p>
    </div>
  );
};
export default Guest;
