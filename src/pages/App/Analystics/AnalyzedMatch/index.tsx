import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Back from "../../../../assets/icons/back-arrow.svg"
import Chelsea from "../../../../assets/icons/chelsea.svg"
import ManchesterIcon from "../../../../assets/icons/manchester-icon.svg"
import FootballMatch from "../../../../assets/images/football-match.svg"
import MiniMap from "../../../../assets/images/mini-map.svg"
import "./index.scss"


const AnalyzedMatch = () => {
  const [tab, setTab] = useState(1)

  const data = [
    {
      a: 2,
      name: "Goals Scored",
      b: 0
    },
    {
      a: 2,
      name: "Shot Attempts",
      b: 0
    },
    {
      a: "70%",
      name: "Ball Possession",
      b: "30%"
    },
    {
      a: 2,
      name: "Free Kicks",
      b: 0
    },
    {
      a: 2,
      name: "Penalties",
      b: 0
    },
    {
      a: 2,
      name: "Yellow Cards",
      b: 0
    },
    {
      a: 2,
      name: "Red Cards",
      b: 0
    },
  ]

  return (
    <div className="analyzed-match">
      <div className="d-flex mt-5 mb-5 mr-3"><img src={Back} alt="back arrow" />{" "} Back to Recent Uploads</div>
      <h3 className="mb-4">Video Analytics</h3>
      <div className="tab-section col-10">
        <div className={`tab ${tab === 1 && "active-tab"}`} onClick={() => setTab(1)}>Analyzed Video</div>
        <div className={`tab ${tab === 2 && "active-tab"}`} onClick={() => setTab(2)}>Match Stats</div>
        <div className={`tab ${tab === 3 && "active-tab"}`} onClick={() => setTab(3)}>Players List</div>

      </div>
      {tab === 1 && <div>

        <div className="d-flex select-section">
          <div className="text">
            Analyzed Video <span className="ml-5">View:</span>
            <select name="" id="">
              <option value="normal">Normal</option>
              <option value="facial_recognition">Facial Recognition</option>
              <option value="jersey_ecognition">Jersey Recognition</option>
              <option value="object_detection">Object Detection</option>
              <option value="player_tracking">Player Tracking</option>
            </select>
          </div>
        </div>
        <div className="col-lg-10 football-vidoe mt-5">
          <img src={FootballMatch} alt="football match" />
        </div>
        <div className="mini-map pt-5 col-lg-10 mt-5">

          <div className="team p-2"><span>Teams:</span>  Manchester United vs Chelsea</div>
          <div className="team p-2 mt-5"><span>Competition: </span>  Premier League</div>
          <div className="text mt-5 mb-5"> Mini Map (Bird’s eye view) </div>

          <div className="video-section">
            <img src={MiniMap} alt="mini map" />
          </div>

        </div>
      </div>}
      {tab === 2 &&
        <div className="col-lg-10">
          <div className="stats-card col-lg-8 mx-auto mt-5 p-5">
            <div className="logo-section d-flex justify-content-between align-items-center px-4">
              <div className="logo-section-left">
                <img src={ManchesterIcon} alt="club logo" />
                <div className="mt-3">Manchester United</div>
              </div>
              <div className="logo-section-center">

                2-0
              </div>
              <div className="logo-section-left">
                <img src={Chelsea} alt="club logo" />
                <div className="mt-3">Chelsea</div>
              </div>

            </div>

            {
              data.map((item, index) => (
                <div className="stats d-flex justify-content-between">
                  <div>{item.a}</div>
                  <div>{item.name}</div>
                  <div>{item.b}</div>
                </div>
              ))
            }
          </div>
        </div>}

      {
        tab === 3 &&
        <div className="comming-soon mt-5 p-3 text-center align-item-center col-lg-10"> comming soon</div>
      }

    </div>

  );
};

export default AnalyzedMatch