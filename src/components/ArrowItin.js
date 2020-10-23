import React from "react";
import '../css/arrow.css'

export default function ArrowItin() {
    const url = ''
    const text = 'Complete Itinerary PDF'

  return (
    <div className="arrow-container">
      <ul>
        <li>
          <a className="animated-arrow" href={url} target='_blank' rel="noopener noreferrer">
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
