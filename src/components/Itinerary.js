import React, { useState, useEffect } from "react";
import { Route, Switch, Link, useRouteMatch, useHistory } from "react-router-dom";
import '../css/itinerary.css'

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

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

const Itinerary = (props) => {
  let { url } = useRouteMatch();
  const size = useWindowSize();
  const history = useHistory()

  const handleSelect = e => {
    history.push(`/${e.target.value}`)
  }

  // conditionally render desktop vs mobile based on window size

  // position sticky for the left hand menu on the desktop itin

  if (size.width > 500) {
    return (
      <div className="itin">
        <div className="dayList">
          {/* <Link className="first" to={`${url}/22`}>
            May 22 + {size.width}
          </Link> */}
          <Link to={`${url}/23`}>May 23 + {size.width}</Link>
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
  } else {
    return(
      <div className='itinmobile'>
        <form>
          <select onChange={handleSelect}>
            <option value='itinerary/22'>May 22</option>
            <option value='itinerary/23'>May 23</option>
            <option value='itinerary/24'>May 24</option>
            <option value='itinerary/25'>May 25</option>
            <option value='itinerary/26'>May 26</option>
            <option value='itinerary/27'>May 27</option>
            <option value='itinerary/28'>May 28</option>
            <option value='itinerary/29'>May 29</option>
            <option value='itinerary/30'>May 30</option>
          </select>
        </form>
        <Switch>
          <Route path="/itinerary/22">
            <Day22 />
          </Route>
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
    )
  }
};

export default Itinerary;
