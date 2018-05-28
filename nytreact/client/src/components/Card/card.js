
import React from "react";
import "./card.css";
  
export const Card = ({children}) => (
    <div className="row main">
     <div className="col s1">
     </div>
    <div className="col s10">
      <div className="card">
        <div className="card-content black-text">
          <span className="card-title title">Search for some Articles</span>
        </div>
      {children}
      </div>
    </div>
    <div className="col s1">
     </div>
  </div>
);