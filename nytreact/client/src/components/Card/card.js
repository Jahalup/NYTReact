
import React from "react";
import "./card.css";
  
export const Card = ({ children }) => (
    <div className="row main">
    <div className="col s12">
      <div className="card #3f51b5 indigo">
        <div className="card-content white-text">
          <span className="card-title title">Search for an Article</span>
        </div>
       {children}
      </div>
    </div>
  </div>
);