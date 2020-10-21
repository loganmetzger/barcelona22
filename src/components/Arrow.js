import React from "react";
import '../css/arrow.css'

// const arrowInfo = {
  // url: 'some url',
  // text: 'some text'
// }

export default function Arrow(props) {
  const { url, text } = props.info;

  return (
    <div className="arrow-container">
      <ul>
        <li>
          <a className="animated-arrow" href={url}>
            <span className="the-arrow -left">
              <span className="shaft" />
            </span>
            <span className="main">
              <span className="text">{text}</span>
              <span className="the arrow -right">
                <span className="shaft"></span>
              </span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
