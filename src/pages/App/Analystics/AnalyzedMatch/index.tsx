import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"
import Back from "../../../../assets/icons/back-arrow.svg"
import Chelsea from "../../../../assets/icons/chelsea.svg"
import ManchesterIcon from "../../../../assets/icons/manchester-icon.svg"
import { useDispatch, useSelector } from "react-redux"
import "./index.scss"
import jsonData from "../../../../assets/data"
import { playerPositions } from "../../../../utils/index"
import { withRouter } from 'react-router-dom'



const AnalyzedMatch = (props) => {
  const [tab, setTab] = useState(1)
  const [selectedVideo, setSelectedVideo] = useState("object_detection")
  const [clubTeam, setClubTeam] = useState<any>("TeamB")
  const { upload }: any = useSelector((state) => state);
  let { id } = useParams();
  const uploadData = upload.allUploadData.data.filter((item) => item._id === id)[0]
  const { url, TeamA, TeamB } = uploadData.model_data

  console.log({ url, TeamA, TeamB })

  // useEffect(()=>{
  //   setSelectedVideo("object_detection") 
  // }, [selectedVideo])
  const data = [
    {
      a: 0,
      name: "Goals Scored",
      b: 0
    },
    {
      a: 0,
      name: "Shot Attempts",
      b: 0
    },
    {
      a: "47%",
      name: "Ball Possession",
      b: "53%"
    },
    {
      a: 0,
      name: "Free Kicks",
      b: 0
    },
    {
      a: 0,
      name: "Penalties",
      b: 0
    },
    {
      a: 0,
      name: "Yellow Cards",
      b: 0
    },
    {
      a: 0,
      name: "Red Cards",
      b: 0
    },
  ]

  const teamAName = TeamA.Players[0].Team.toUpperCase()
  const teamBName = TeamB.Players[0].Team.toUpperCase()
  const selectOptionArr = Object.keys(url)

  const team: any = clubTeam === "TeamB" ? TeamB : TeamA

  const handleVideoChange = (e) => {
    const vid: any = document.getElementById("playBackVideo")
    vid.load();
    setSelectedVideo(e.target.value)
    setTimeout(() => {
      if (vid) {
        vid.play()
        // vid.current.load();
        // vid.oncanplay = function () {
        //   vid.autoplay = true
        // };
      }
    }, 1000);
  }


  return (
    <div className="analyzed-match">
      <div className="d-flex mt-5 mb-5 mr-3 back" onClick={() => props.history.goBack()}><img src={Back} alt="back arrow" />{" "} Back to Recent Uploads</div>
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
            <select name="" id="" value={selectedVideo} onChange={handleVideoChange}>
              {selectOptionArr.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-lg-10 football-vidoe mt-5">
          <video width="320" height="240" controls id="playBackVideo">
            <source src={url[`${selectedVideo}`]} type="video/mp4" />
            {/* <source src="movie.ogg" type="video/ogg"> */}
            Your browser does not support the video tag.
          </video>
          {/* <img src={FootballMatch} alt="football match" /> */}
        </div>
        <div className="mini-map pt-5 col-lg-10 mt-5">

          <div className="team p-2"><span>Teams:</span>  {teamAName} vs {teamBName}</div>
          <div className="team p-2 mt-5"><span>Competition: </span>  Premier League</div>
          <div className="text mt-5 mb-5"> Mini Map (Bird’s eye view) </div>

          <div className="video-section">
            <video width="320" height="240" controls>
              <source src={url.minimap} type="video/mp4" />
              {/* <source src="movie.ogg" type="video/ogg"> */}
              Your browser does not support the video tag.
            </video>
            {/* <img src={MiniMap} alt="mini map" /> */}
          </div>

        </div>
      </div>}
      {tab === 2 &&
        <div className="col-lg-10">
          <div className="stats-card col-lg-8 mx-auto mt-5 p-5">
            <div className="logo-section d-flex justify-content-between align-items-center px-4">
              <div className="logo-section-left">
                <img src={ManchesterIcon} alt="club logo" />
                <div className="mt-3">{teamAName}</div>
              </div>
              <div className="logo-section-center">

                0-0
              </div>
              <div className="logo-section-left">
                <img src={Chelsea} alt="club logo" />
                <div className="mt-3">{teamBName}</div>
              </div>

            </div>

            {
              data.map((item, index) => (
                <Link to={`/app/analytics/stats/${id}`} className="stats d-flex justify-content-between" key={index}>
                  <div>{item.a}</div>
                  <div>{item.name}</div>
                  <div>{item.b}</div>
                </Link>
              ))
            }
          </div>
        </div>}

      {
        tab === 3 &&
        <>
          <div className="dowload-section">
            <div className="club" onClick={() => setClubTeam(clubTeam === "TeamB" ? "TeamA" : "TeamB")}>
              <img src={ManchesterIcon} alt="club logo" />
              <div>
                {clubTeam === "TeamB" ? teamBName : teamAName}
              </div>
            </div>
            <button>Download matrics</button>
          </div>
          <div className="player-card-section">
            <div className="player-card-section-title mb-4 mt-3">
              Below are the players gotten from the analyzed video
            </div>
            <div className="player-card-section-cards">
              {
                team.Players.map((item, index) => (

                  <Link className="card" key={index} to={`/app/analytics/player/${id}`} >
                    <div className="image mb-2">

                      <img src={item.Image} alt="player" />
                    </div>
                    {item.Name}
                    <div>
                      {item.Position}
                    </div>
                    <div className="no">
                      No. {index + 1}
                    </div>

                  </Link>
                ))
              }
            </div>
          </div>
        </>
        // <div className="comming-soon mt-5 p-3 text-center align-item-center col-lg-10"> comming soon</div>
      }

    </div>

  );
};

export default withRouter(AnalyzedMatch)