import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { postCall, getCall } from "../../../../../api/request";
import endPoint from "../../../../../api/endPoints";

import { fetchLocation } from "../../../../../store/locations/actions";
import Back from "../../../../../assets/icons/back-arrow.svg";
import Step1 from "../../../../../assets/images/step-1.svg";
import Step2 from "../../../../../assets/images/step-2.svg";
import EmptyFile from "../../../../../assets/icons/empty-file.svg";
import { LoopingRhombusesSpinner } from "react-epic-spinners";
import EditPlayer from "../../../../../component/EditPlayer";
import PlayerCard from "../../../../../component/PlayerCard";
import axios from "axios";

import "./index.scss";
import moment from "moment";

const StepTwo = ({ handleChangeStep, clubDetail }) => {
  const { profile, upload }: any = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { allUploadData, getLoading, getError } = upload;

  const [playersData, setPlayersData]: any = useState([]);

  const [tab, setTab] = useState(1);
  const [showEditModal, setShowEditModal] = useState(false);

  function addPlayer(player) {
    setPlayersData([player, ...playersData]);
    setShowEditModal(false);
  }
  console.log({ playersData });

  const removePlayer = (name) => {
    const result = playersData.filter((player) => player.name != name);
    setPlayersData(result);
  };
  const handleChangeTab = (tab, analyzed) => {
    setTab(tab);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    // setErrorMessage("");
    playersData.map(async (item, i) => {
      let photoName = "";
      getCall(endPoint.getS3ImgLink).then(async (resLink) => {
        if (resLink.status === 200) {
          console.log({ resLink });
          const { filename, signedUrl } = resLink.data.data;
          console.log({ filename, signedUrl });
          const responseFetch = await axios.put(signedUrl, item.photo);
          if (responseFetch.status === 200) {
            const data = {
              name: item.name,
              photo: filename,
              club_name: item.club_name,
              position: item.position,
              jersey_no: item.jersey_no,
              reason: "",
              status: "pending",
              club_id: item.club_id,
            };

            postCall(endPoint.createPlayer, data).then((res) => {
              setIsLoading(false);
              if (res.status === 200) {
                // cookie.set("auth", res.data.data.auth_token);
                // return window.location.replace("/app")
                swal("Success", "Players created successfully!", "success");
                // handleChangeStep(2)
              }
              setErrorMessage(res.data.message);
              setInterval(() => setErrorMessage(""), 8000);
            });
            return filename;
          }
          return false;
        }
      });

      return 
    });
    setTimeout(() => {
      window.location.replace("/app/player-library")
    }, 3000);
  }

  async function getImgLink(file) {
    getCall(endPoint.getS3ImgLink).then(async (resLink) => {
      if (resLink.status === 200) {
        console.log({ resLink });
        const { filename, signedUrl } = resLink.data.data;
        console.log({ filename, signedUrl });
        const responseFetch = await axios.put(signedUrl, file);
        if (responseFetch.status === 200) {
          return filename;
        }
        return false;
      }
    });
  }

  return (
    <div className="step-two">
      <div className="tab-section mt-5">
        <div
          className={`tab ${tab === 1 && "active-tab"}`}
          onClick={() => handleChangeTab(1, "all")}
        >
          Starting {playersData.length}
        </div>
        <div
          className={`tab ${tab === 2 && "active-tab"}`}
          onClick={() => handleChangeTab(2, true)}
        >
          Substitutes
        </div>
        <div
          className={`tab ${tab === 3 && "active-tab"}`}
          onClick={() => handleChangeTab(3, false)}
        >
          Reserves
        </div>
      </div>

      <div className=" form col-lg-8 mt-5">
        <div className="form-group  mt-5 ">
          <div>Upload your players details</div>
          <button
            className="upload-player px-3"
            onClick={() => setShowEditModal(true)}
          >
            Upload player
          </button>{" "}
          <label htmlFor="csvFile" className="upload-player pt-2 px-3 csv-btn">
            Upload players from CSV file
          </label>{" "}
          <button className="btn players-add">2</button>
          <input
            type="file"
            name="csvFile"
            id="csvFile"
            className="logo-file"
          />
        </div>
      </div>

      <div className="player-card-section-cards mt-5">
        {playersData.map((playeri, index) => (
          <div key={index}>
            <PlayerCard player={playeri} removePlayer={removePlayer} />
          </div>
        ))}
      </div>

      <div className="col-lg-7 d-flex justify-content-between">
        <button
          className="btn btn-secondary mt-5"
          onClick={() => handleChangeStep(1)}
        >
          Previous step
        </button>
        <button
          className={`btn btn-primary ${
            playersData.length > 1 && "btn-color"
          } mt-5`}
          onClick={handleSubmit}
          disabled={playersData.length < 2 || isLoading}
        >
          Submit
          {isLoading && (
            <div
              className="spinner-border text-light spinner-border-sm"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </button>
      </div>
      {showEditModal && (
        <EditPlayer
          setShowModal={setShowEditModal}
          addPlayer={addPlayer}
          clubDetail={clubDetail}
        />
      )}
    </div>
  );
};

export default withRouter(StepTwo);
