import React, { useState } from "react";
import axios from "axios";

const initform = {
  name: "",
  email: "",
};

const RsvpForm = (props) => {
  const { setGuests, guests } = props;

  const [person1, setPerson1] = useState(initform)
  const [person2, setPerson2] = useState(initform)

  // handle function for person 1 form
  const handleChange1 = (e) => {
    setPerson1({ [e.target.name]: e.target.value });
  };
  // handle function for person 2 form
  const handleChange2 = (e) => {
    setPerson2({ [e.target.name]: e.target.value });
  };

  // same submit function for both
  const handleSubmit = (e) => {
    e.preventDefault();

    // post person1
    axios.post('url', person1)
      .then(res => {
        setGuests([person1, ...guests])
      })
      .catch(err => {
        console.log(err)
      })
    // post person2
    axios.post('url', person2)
      .then(res => {
        setGuests([person2, ...guests])
      })
      .catch(err => {
        console.log(err)
      })

    // reset form values
    setPerson1(initform);
    setPerson2(initform);
  };

  return (
    <div className="rsvp">
      <form className="form" onSubmit={handleSubmit}>
        <div className='inputsdiv'>
          <div className='inputdiv'>
            <input
              name="name"
              value={person1.name}
              placeholder="Name"
              type="text"
              onChange={handleChange1}
            />
            <br />
            <input
              name="email"
              value={person1.email}
              placeholder="Email"
              type="text"
              onChange={handleChange1}
            />
          </div>
          <div>
            <input
              name="name"
              value={person2.name}
              placeholder="Name"
              type="text"
              onChange={handleChange2}
            />
            <br />
            <input
              name="email"
              value={person2.email}
              placeholder="Email"
              type="text"
              onChange={handleChange2}
            />
          </div>
        </div>
        <button>RSVP</button>
      </form>
    </div>
  );
};

export default RsvpForm;
