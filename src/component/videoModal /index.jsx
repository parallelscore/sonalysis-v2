import React, { useState, useEffect } from "react";
import "./index.scss";
import Modal from "../layouts/Modal";
import { withRouter } from "react-router-dom";

const VideoModal = ({ isClose, vidoeURL }) => {
  // const url = vidoeURL + "&embedded=true";
  const url = vidoeURL.replace("watch?v=", "v/")
  console.log({vidoeURL, url});
  // useEffect(()=>{
  //   const vid: any = document.getElementById("playBackVideo")
  //   vid.load();
  //   setTimeout(() => {
  //     if (vid) {
  //       vid.play()
  //       // vid.current.load();
  //       // vid.oncanplay = function () {
  //       //   vid.autoplay = true
  //       // };
  //     }
  //   }, 1000);

  // },[])
  return (
    <Modal>
      <div className="soon col-lg-4 mx-auto">
        {/* <video width="100%" height="340" controls id="playBackVideo">
            <source src={"https://www.youtube.com/watch?v=ad2xCptHu1c"} type="video/mp4" />
          
            Your browser does not support the video tag.
          </video> */}
        <iframe target="_parent"  width="100%" height="315" src={url}  ></iframe>
        <form>
          <button onClick={isClose} className="mx-auto">
            Close{" "}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default withRouter(VideoModal);
