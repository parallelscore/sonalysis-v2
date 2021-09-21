import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Back from "../../../../assets/icons/back-arrow.svg";
import Chelsea from "../../../../assets/icons/chelsea.svg";
import Graph from "../../../../assets/images/graph.svg";
import SearchIcon from "../../../../assets/icons/search-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import jsonData from "../../../../assets/data";
import { playerPositions } from "../../../../utils/index";
import { withRouter } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PieChart from "../../../../component/Chart/Pie";

const PlayerStats = (props) => {
  const { upload }: any = useSelector((state) => state);
  let { id } = useParams();
  const uploadData = upload.allUploadData.data.filter(
    (item) => item._id === id
  )[0];
  const { url, TeamA, TeamB } = uploadData.model_data;
  const [tab, setTab] = useState(1);
  const [clubTeam, setClubTeam] = useState<any>("TeamA");
  const [playerDetails, setPlayerDetails] = useState<any>(TeamA.Players[0]);

 

  const getObjectValue = (obj)=>{
    const key:any = Object.keys(obj||{0:0})
    if(key.length==1 && key[0]==0){
      return 0
    }
    return key.length
  }

  const team: any = clubTeam === "TeamB" ? TeamB : TeamA;

  const scrollToTop = (player)=>{
    setPlayerDetails(player)
    window.scroll({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });
  }

  return (
    <div className="player">
      <div
        className="d-flex mt-5 mb-5 mr-3 back "
        onClick={() => props.history.goBack()}
      >
        <img src={Back} alt="back arrow" className="mr-5" />
        {"   "} Back to Players List
      </div>
      <h3 className="mb-4">Player Stats</h3>

      <div className="dowload-section">
        <div className="search-section">
          <input type="text" placeholder="Search for player" />{" "}
          <img src={SearchIcon} alt="search icon" />
        </div>
        <button>Download matrics</button>
      </div>
      <div className="player-card-section mt-5">
        <div className="player-card-detail">
          <div className="img-section d-lg-flex">
            <div className="images">
              <img
                src={playerDetails.Image}
                alt={`${playerDetails.Name} photo`}
              />
            </div>
            <div className="details pl-5 mb-5">
              <div className="names pl-5">
                <div>{playerDetails.Name.split(" ")[0]}</div>
                <h2>{playerDetails.Name.split(" ")[1]}</h2>
              </div>
              <div className="positions mt-3 ">
                <div className="postion">
                  <div className="title">Position</div>
                  <div className="">{playerDetails.Position}</div>
                </div>
                <div className="postion">
                  <div className="title">Jersey Number</div>
                  <div className="">{playerDetails.Jersey_no}</div>
                </div>
                <div className="postion">
                  <div className="title">Team</div>
                  <div className="">{playerDetails.Team}</div>
                </div>
              </div>
              <div className="circular-progress-bar mt-5 mb-5 d-flex justify-content-evenly">
                <div style={{ width: 100, height: 100, fontSize: "13px" }}>
                  <CircularProgressbar
                    value={playerDetails.Ball_possession}
                    text={`${playerDetails.Ball_possession}%`}
                    styles={buildStyles({
                      textSize: "16px",
                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,
                      // Colors
                      pathColor: ` #47DC40`,
                      textColor: "#fff",
                      trailColor: "#CDFDE9",
                      backgroundColor: "#47DC40",
                    })}
                  />
                  <div className="mt-2">Ball Possession</div>
                </div>
                <div style={{ width: 100, height: 100, fontSize: "13px" }}>
                  <CircularProgressbar
                    value={playerDetails.Ball_possession}
                    text={`${playerDetails.Ball_possession}%`}
                    styles={buildStyles({
                      textSize: "16px",
                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,
                      // Colors
                      pathColor: ` #47DC40`,
                      textColor: "#fff",
                      trailColor: "#CDFDE9",
                      backgroundColor: "#47DC40",
                    })}
                  />
                  <div className="mt-2">Long Pass Acc.</div>
                </div>
                <div style={{ width: 100, height: 100, fontSize: "13px" }}>
                  <CircularProgressbar
                    value={playerDetails.Ball_possession}
                    text={`${playerDetails.Ball_possession}%`}
                    styles={buildStyles({
                      textSize: "16px",
                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,
                      // Colors
                      pathColor: ` #47DC40`,
                      textColor: "#fff",
                      trailColor: "#CDFDE9",
                      backgroundColor: "#47DC40",
                    })}
                  />
                  <div className="mt-2">Short Pass Acc.</div>
                </div>
              </div>
              <div className="action-section d-flex flex-wrap justify-content-evenly col-lg-12 mx-auto">
                <div className="action mt-3">
                  <div>{getObjectValue(playerDetails.goal)}</div>
                  <div>Goals</div>
                </div>
                <div className="action mt-3 mr-5">
                  <div>{getObjectValue(playerDetails.red_card)}</div>
                  <div>Red Card</div>
                </div>
                <div className="action mt-3 mr-5">
                  <div>{getObjectValue(playerDetails.yellow_card)}</div>
                  <div>Yellow Card</div>
                </div>
                <div className="action mt-3 mr-5">
                  <div>{getObjectValue(playerDetails.penalty)}</div>
                  <div>Penalty</div>
                </div>
                <div className="action mt-3 mr-5">
                  <div>{getObjectValue(playerDetails.tackle)}</div>
                  <div>Tackle</div>
                </div>
                <div className="action mt-3 mr-5">
                  <div>{getObjectValue(playerDetails.shot)}</div>
                  <div>Shot</div>
                </div>
                <div className="action mt-3 mr-5">
                  <div>{getObjectValue(playerDetails.dribble)}</div>
                  <div>Dribble</div>
                </div>
                <div className="action mt-3 mr-5">
                  <div>{getObjectValue(playerDetails.cornerkick)}</div>
                  <div>corner Kick</div>
                </div>
                <div className="action mt-3 mr-5">
                  <div>{getObjectValue(playerDetails.penalty)}</div>
                  <div>penalty</div>
                </div>
                <div className="action mt-3 mr-5">
                  <div>{getObjectValue(playerDetails.ball_saved)}</div>
                  <div>Ball Saved</div>
                </div>
                <div className="action mt-3 mr-5">
                  <div>{getObjectValue(playerDetails.Goal_attempt)}</div>
                  <div>Goal Attempt</div>
                </div>
                <div className="action mt-3 mr-5">
                  <div>{getObjectValue(playerDetails.True_passes)}</div>
                  <div>True Passes</div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="player-card-section-title mb-4 mt-3 mb-3">
            Speed Graph (In Kilometer/second)
          </div> */}
          <div className="player-card-section-graph m-5 ">
            {/* <img src={Graph} alt="graph" /> */}
            <PieChart speed={playerDetails.Speed}/>
          </div>
        </div>

        <h3 className="mb-4 mt-5">Other Players</h3>

        <div className="player-card-section-cards">
          {team.Players.map((item, index) => (
            <div
              className="card"
              key={index}
              onClick={() => scrollToTop(item) }
            >
              <div className="image mb-2">
                <img src={item.Image} alt="player" />
              </div>
              {item.Name}
              <div>{item.Position}</div>
              <div className="no">No. {index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(PlayerStats);
