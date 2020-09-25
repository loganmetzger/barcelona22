import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Itinerary from "./components/Itinerary";
import Rsvp from "./components/Rsvp";
import Faqs from "./components/Faqs";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/itinerary">
            <Itinerary />
          </Route>
          <Route path="/faqs">
            <Faqs />
          </Route>
          <Route path="/rsvp">
            <Rsvp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
