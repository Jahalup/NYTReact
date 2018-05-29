import React from "react";
import { Link } from "react-router-dom";


export const Nav = props => (
<nav>
    <div className="nav-wrapper #40c4ff light-blue accent-2">

      <Link className="brand-logo" to="/">NYT Search!</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/savedarticles">Saved Articles</Link></li>
         
        
        
      </ul>
    </div>
  </nav>
)