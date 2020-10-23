import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

import rsvp from "../../images/rsvp.jpg";

const initform = {
  name: "",
  email: "",
};

const RsvpForm = (props) => {
  const [person1, setPerson1] = useState(initform);
  const [person2, setPerson2] = useState(initform);
  const [trigger, setTrigger] = useState(false)

  // handle function for person 1 form
  const handleChange1 = (e) => {
    e.persist();
    setPerson1({ ...person1, [e.target.name]: e.target.value });
  };
  // handle function for person 2 form
  const handleChange2 = (e) => {
    e.persist();
    setPerson2({ ...person2, [e.target.name]: e.target.value });
  };

  // same submit function for both
  const handleSubmit = (e) => {
    e.preventDefault();

    // post person1
    axios
      .post("https://barcelona22.herokuapp.com/rsvps", person1)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
    // post person2
    axios
      .post("https://barcelona22.herokuapp.com/rsvps", person2)
      .then((res) => {
        setTrigger(trigger => !trigger)
      })
      .catch((err) => {
        console.log(err);
      });

    // reset form values
    setPerson1(initform);
    setPerson2(initform);
  };

  return (
    <div className="rsvp">
    {/* <img src={rsvp} alt='cafe' className='rsvp-bg' /> */}
    <div className='rsvp-container'>
      <h3>Will you be joining us in Spain?</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputsdiv">
          <div className="inputdiv">
            <TextField
              className="input"
              label="Name"
              name="name"
              value={person1.name}
              type="text"
              onChange={handleChange1}
            />
            <br />
            <TextField
              className="input"
              label="Email"
              name="email"
              value={person1.email}
              type="text"
              onChange={handleChange1}
            />
          </div>
          <div>
            <TextField
              className="input"
              label="Name"
              name="name"
              value={person2.name}
              type="text"
              onChange={handleChange2}
            />
            <br />
            <TextField
              className="input"
              label="Email"
              name="email"
              value={person2.email}
              type="text"
              onChange={handleChange2}
            />
          </div>
        </div>
        <div className="button">
          <Button
            variant="outlined"
            color="primary"
            className="button"
            type="submit"
          >
            RSVP
          </Button>
        </div>
      </form>
      {trigger ? <p className='success'>We look forward to seeing you in Spain!</p> : null}
      </div>
    </div>
  );
};

export default RsvpForm;
