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

  console.log({ url, TeamA, TeamB }, {uploadData})

  // useEffect(()=>{
  //   setSelectedVideo("object_detection") 
  // }, [selectedVideo])
  // team1_longpass: 0
  
  // team1_cross: 0
  //   team1_cornerkick: 0
  // team1_dribble: 0
  // team1_freethrow: 0
  // team1_longshot: 0
  // team1_save: 0
  // team1_shortpass: 0
  // team1_shots: 0
  // team1_foul: 0
  // team1_tackle: 0
  // team1_goals: 0
// team1_penalty: 0
// team1_free_kick: 0
// team1_possession: 0
// team1_redcard: 0
// team1_yellowcard: 0

  const data = [
    {
      a: uploadData.model_data.team1_goals,
      name: "Goals Scored",
      b: uploadData.model_data.team2_goals
    },
    {
      a: uploadData.model_data.team1_shots,
      name: "Shot Attempts",
      b: uploadData.model_data.team2_shots
    },
    {
      a: uploadData.model_data.team1_shortpass,
      name: "Short Pass",
      b: uploadData.model_data.team2_shortpass
    },
    {
      a: uploadData.model_data.team1_longpass,
      name: "Long Pass",
      b: uploadData.model_data.team2_longpass,
    },
    {
      a: uploadData.model_data.team1_cross,
      name: "Cross",
      b: uploadData.model_data.team2_cross,
    },
    {
      a: uploadData.model_data.team1_save,
      name: "Ball saved",
      b: uploadData.model_data.team2_save,
    },
    {
      a: uploadData.model_data.team1_freethrow,
      name: "Free Throw",
      b: uploadData.model_data.team2_freethrow,
    },
    {
      a: `${uploadData.model_data.team1_possession}%`,
      name: "Ball Possession",
      b: `${uploadData.model_data.team2_possession}%`,
    },
    {
      a: uploadData.model_data.team1_free_kick,
      name: "Free Kicks",
      b:  uploadData.model_data.team2_free_kick,
    },
    {
      a: uploadData.model_data.team1_cornerkick,
      name: "Corner Kicks",
      b: uploadData.model_data.team2_cornerkick,
    },
    {
      a: uploadData.model_data.team1_tackle,
      name: "Tackle",
      b: uploadData.model_data.team2_tackle,
    },
    {
      a: uploadData.model_data.team1_dribble,
      name: "Dribble",
      b: uploadData.model_data.team2_dribble,
    },
    {
      a: uploadData.model_data.team1_foul,
      name: "Foul",
      b: uploadData.model_data.team2_foul,
    },
    {
      a: uploadData.model_data.team1_penalty,
      name: "Penalties",
      b: uploadData.model_data.team2_penalty,
    },
    {
      a: uploadData.model_data.team1_yellowcard,
      name: "Yellow Cards",
      b: uploadData.model_data.team2_yellowcard,
    },
    {
      a: uploadData.model_data.team1_redcard,
      name: "Red Cards",
      b: uploadData.model_data.team2_redcard,
    },
  ]

  const teamAName = TeamA.Players[0].Team.toUpperCase()
  const teamBName = TeamB.Players[0].Team.toUpperCase()
  const selectOptionArr = Object.keys(url)

  const team: any = clubTeam === "TeamB" ? TeamB : TeamA

  const actionArr =  [ "object_detection", "name", "team",  "color", "position",  "jerseynumber"]
  console.log("selectOptionArr",selectOptionArr)

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
      <div className="d-flex mt-5 mb-5 mr-3 back" onClick={() => props.history.push("/app/analytics/all-video")}><img src={Back} alt="back arrow" />{" "} Back to Recent Uploads</div>
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
              {actionArr.map((item) => (
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
          {/* <div className="team p-2 mt-5"><span>Competition: </span>  Premier League</div> */}
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

                {uploadData.model_data.team1_goals}-{uploadData.model_data.team2_goals}
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
                      No. {item.Jersey_no}
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