import React from "react";
import "./form.css";

export const Input = props => (
  <div className="row">
<div className="mainin input-field col s6">
  <input id="first_name2" type="text" className="validate" {...props} />
  
</div>
</div>
);



{/* <div className="form-group">
    <input className="form-control" {...props} />
  </div> */}