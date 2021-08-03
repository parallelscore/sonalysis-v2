import React, { useState } from 'react';
import {Link} from "react-router-dom"
import "./index.scss"


const Analytics = () => {

  return (
    <div className="analytics d-flex flex-column flex-lg-row justify-content-evenly ">
    <div className="left-card col-lg-4 d-flex flex-column align-items-center justify-content-end">
      <div className="name">
      Data
      </div>
      <h2 className="mt-3">
      Analytics
      </h2>
      <div className="textt col-8 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, nullam id aliquam.
      </div>
      <Link to="/app/analytics/all-video">

      <button className=" ">
        OPEN
      </button>
      </Link>
      
    </div>
    <div className="right-card col-lg-4 d-flex flex-column align-items-center justify-content-end">
    <div className="name">
    PLayers
      </div>
      <h2 className="mt-3">
      Comparison
      </h2>
      <div className="textt col-8 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, nullam id aliquam.
      </div>
      <button className=" ">
        OPEN
      </button>
    </div>
    </div>

  );
};

export default Analytics