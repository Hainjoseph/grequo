import React from "react";
import '../css/Ev.css';
import Feed from "./Feed";
import Navbar from "./Navbar";
import Widget from "./Widget";

function Ev() {
  return (
    <div className="elec">
      <Navbar />
      <div className="elec_content">
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default Ev;
