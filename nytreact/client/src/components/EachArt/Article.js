import React from "react";

export const Article = props => (


<div className="col s12 m7">
    <h4 className="header"> <a href={props.url}>{props.title}</a></h4>
    <div className="card horizontal">
      {/* <div className="card-image">
        <img className="artimage" src="{props.image}" />
      </div> */}
      <div className="card-stacked">
        <div className="card-content">
          <p>{props.summary}</p>
        </div>
      </div>
    </div>
  </div>

    )