import React from "react";
import "./form.css";

export const Input = props => (
  <div className="row">
<div className="mainin input-field col s6">
  <input type={props.type} {...props} />
  <label>{props.place}</label>
</div>
</div>
);



