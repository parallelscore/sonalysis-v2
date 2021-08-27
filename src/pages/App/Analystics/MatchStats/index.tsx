import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"
import Back from "../../../../assets/icons/back-arrow.svg"
import Chelsea from "../../../../assets/icons/chelsea.svg"
import Football from "../../../../assets/images/football.svg"
import ManchesterIcon from "../../../../assets/icons/manchester-icon.svg"
import { useDispatch, useSelector } from "react-redux"
import "./index.scss"
import jsonData from "../../../../assets/data"
import { playerPositions } from "../../../../utils/index"
import { withRouter } from 'react-router-dom'



const AnalyzedMatch = (props) => {
  const [tab, setTab] = useState(1)
  const [selectedVideo, setSelectedVideo] = useState("object_detection")
  const [clubTeam, setClubTeam] = useState<any>("TeamA")
  const { upload }: any = useSelector((state) => state);
  let { id } = useParams();
  const uploadData = upload.allUploadData.data.filter((item) => item._id === id)[0]
  console.log({uploadData})
  const { url, TeamA, TeamB } = uploadData.model_data

  console.log({ url, TeamA, TeamB })



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
    <div className="match-stats">
      <div className="d-flex mt-5 mb-5 mr-3 back" onClick={() => props.history.goBack()}><img src={Back} alt="back arrow" />{" "} Back to Match Stats</div>
      <h3 className="mb-4">Goals Scored</h3>

      <div className="video-section d-lg-flex ">

        <div className="col-lg-6 football-vidoe mt-5">
          <video width="320" height="240" controls id="playBackVideo">
            <source src={url[`${selectedVideo}`]} type="video/mp4" />
            {/* <source src="movie.ogg" type="video/ogg"> */}
            Your browser does not support the video tag.
          </video>

        </div>
        <div className="video-section-right ml-5">
          <div className="d-flex select-section">
            <div className="text">
              <span className="">Time Stamps:</span>
              <select name="" id="" value={selectedVideo} onChange={handleVideoChange}>
                <option value="all">All</option>
                {selectOptionArr.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div className="card-img">
            <img src={Football} alt="video"  /> <span>36'</span>
            </div>
            <div className="card-img">
            <img src={Football} alt="video"  /> <span>36'</span>
            </div>
          </div>

        </div>
      </div>
      <h5 className="mt-5">Goal Information</h5>
      <div className="infor-card col-lg-4">
      <div className="player-card-section-cards">
          {team.Players.slice(8,10).map((item, index) => (
            <div className="card-t " key={index}>
              <div className="image mb-2">
                <img src={item.Image} alt="player" />
              </div>
              <div className="content pl-5">
              {item.Name}
              <div>{item.Position}</div>
              <div className="no">No. {index + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    

  );
};

export default withRouter(AnalyzedMatch)