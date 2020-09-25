import React from "react";
import {
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";

// Individual Day component imports
import Day22 from "./ItinDays/Day22";
import Day23 from "./ItinDays/Day23";
import Day24 from "./ItinDays/Day24";
import Day25 from "./ItinDays/Day25";
import Day26 from "./ItinDays/Day26";
import Day27 from "./ItinDays/Day27";
import Day28 from "./ItinDays/Day28";
import Day29 from "./ItinDays/Day29";
import Day30 from "./ItinDays/Day30";

const Itinerary = (props) => {
  let { url } = useRouteMatch();

  return (
    <div className='itin'>
      <div className='dayList'>
        <Link className='first' to={`${url}/22`}>May 22</Link>
        <Link to={`${url}/23`}>May 23</Link>
        <Link to={`${url}/24`}>May 24</Link>
        <Link to={`${url}/25`}>May 25</Link>
        <Link to={`${url}/26`}>May 26</Link>
        <Link to={`${url}/27`}>May 27</Link>
        <Link to={`${url}/28`}>May 28</Link>
        <Link to={`${url}/29`}>May 29</Link>
        <Link to={`${url}/30`}>May 30</Link>
      </div>
      <Switch>
        <Route path="/itinerary/22">
          <Day22 />
        </Route>
        {/* content not displaying properly */}
        <Route path="/itinerary/23">
          <Day23 />
        </Route>
        <Route path="/itinerary/24">
          <Day24 />
        </Route>
        <Route path="/itinerary/25">
          <Day25 />
        </Route>
        <Route path="/itinerary/26">
          <Day26 />
        </Route>
        <Route path="/itinerary/27">
          <Day27 />
        </Route>
        <Route path="/itinerary/28">
          <Day28 />
        </Route>
        <Route path="/itinerary/29">
          <Day29 />
        </Route>
        <Route path="/itinerary/30">
          <Day30 />
        </Route>
      </Switch>
    </div>
  );
};

export default Itinerary;
