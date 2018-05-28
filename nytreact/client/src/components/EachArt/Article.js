import React from "react";

export const Article = props => (


<div className="col s12">
    <h4 className="header"> <a href={props.url}>{props.title}</a></h4>
    <div className="card horizontal">
    <p>{props.summary}</p>
    <button className="btn btn-success button" onClick={props.onClick}>Save</button>
  </div>
  </div>

    )