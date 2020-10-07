import React, { useState } from "react";
import axios from "axios";

const initform = {
  name: "",
  email: "",
};

const RsvpForm = (props) => {
  const [person1, setPerson1] = useState({
    name: "",
    email: "",
  });
  const [person2, setPerson2] = useState(initform);

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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // post person2
    axios
      .post("https://barcelona22.herokuapp.com/rsvps", person2)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // reset form values
    console.log(person1);
    setPerson1(initform);
    setPerson2(initform);
  };

  console.log(person1);

  return (
    <div className="rsvp">
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputsdiv">
          <div className="inputdiv">
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
