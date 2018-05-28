import React from "react";
import "./form.css";

export const FormBtn = props => (
  <button {...props}  className="btn btn-success button">
  Search
    {props.children}
  </button>
);
