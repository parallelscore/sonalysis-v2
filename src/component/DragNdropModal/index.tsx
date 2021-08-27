
import React, { useState, useRef } from "react";
import "./index.scss"
import Modal from "../layouts/Modal"
import FolderIcon from "../../assets/icons/folder.svg"
import { FileDrop } from 'react-file-drop'
import EmptyFile from "../../assets/icons/empty-file.svg"
import { useDispatch, useSelector } from "react-redux"
import { createUploadRequest } from "../../store/upload/actions"
import axios from "axios"

export interface CardProps {
  number?: number;
  desc?: string;
  image?: string;
  charts?: any;
}

const DragNdrop = ({ setOpenDragNdropModal,  handleChangeTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoFile, setVideoFile] = useState<any>("");
  const dispatch = useDispatch()
  const { upload }: any = useSelector((state) => state);
  const { postLoading, postError, progress } = upload
console.log({postLoading, progress})
  const fileInputRef = useRef(null);
  const onFileInputChange = (event) => {
    const { files } = event.target;
    // do something with your files...
  }

  const onTargetClick = () => {
    // fileInputRef.current.click()
  }

  const handleOnchange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file)
  }

  const handleSubmit = (videoFile) => {
    // const formData = new FormData()
    // const file: any = videoFile
    // formData.append("file", file,);
    dispatch(createUploadRequest(videoFile, handleChangeTab, setOpenDragNdropModal)) 
  }

  const downloadVideo = () => {
    const link: any = document.getElementById("link")
    const linkValue = link.value
    // setLinkLoading(true)
    // "https://res.cloudinary.com/sirsuccess/video/upload/v1616574885/pscore/Chelsea_0-2_Manchester_United___Premier_League_Highlights_msbcqa.mp4"
    axios({
      url: linkValue, //your url
      method: "GET",
      responseType: "blob" // important
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link_upload = new Blob([response.data], {
        type: `video/mp4`
      });
      // console.log({link_upload })
      const formData = new FormData();

    formData.append("file", link_upload, "url upload.mp4");
    // console.log("formData", formData.get("file"));
      handleSubmit(formData)
      // uploadURL(link_upload)
      // setLinkLoading(false)
    }).catch((error) => {
      console.log({ error })
      // setLinkLoading(false)
      // return toast({
      //   status: "error",
      //   description:
      //     "We can't get the video from the link, please try again",
      // });

    })
  };

  


  return (
    <Modal>

      <div className="container">
        <div className="drop-n-drop col-lg-6 mx-auto p-5">
           <>
            <h4>Upload and Analyze video</h4>
            <div className="drop-n-drop-text">
              It helps if the video is a high quality video as it gives a more precise analysis
            </div>
            <div className="drop-zone">
              <img src={EmptyFile} alt="drop and drop" className="mt-5" />
              <div className="text mb-5 mt-3">
                Drag and drop video file or <label htmlFor="file">browse</label> your device
                <p className="mt-3"> <span>{videoFile?.name}</span></p>
              </div>
              <input
                onChange={handleOnchange}
                ref={fileInputRef}
                type="file"
                accept="video/*"
                className="hidden"
                id="file"
              />
              <FileDrop
                onTargetClick={onTargetClick} />
            </div>
            <button className="primary mt-3" onClick={()=>handleSubmit(videoFile)} disabled={postLoading}>
             {postLoading?<div>Uploading... <div className="spinner-border text-light spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div></div>:" Analyze Video"}
            </button>
            <div className="input-container">
            <input type="text"  id="link" placeholder="Paste link here..." /> <button onClick={downloadVideo}>Analyse link</button>
          </div>
          </>
          {postLoading && <div className="progress-section mt-5">

            {progress.percentCompleted===100?<h4>Finalizing your video upload</h4>:<h4>Your video is being uploaded</h4>}
            <div className="text mb-5">
              Please make sure you have a stable internet connection
            </div>
            <div className="d-flex justify-content-between">
              <div className="folder-section">
                <img src={FolderIcon} alt="" /> {videoFile.name}
              </div>
              <div className="infor-section">
                <div className="completed">
                  {progress.percentCompleted}% Completed
                </div>
                <div className="size">{Number(progress.progressEvent/1000000).toFixed(2)} MB / {Number(progress.total/1000000).toFixed(2)} MB</div>
              </div>
            </div>

            <div className="progress-outer">
              <div className="progress-inner" style={{ width: `${progress.percentCompleted}%` }}>
              </div>
            </div>

          </div>}
         
          <div className="d-flex min-cancel justify-content-between mt-5 col-lg-9 mx-auto">
            <button onClick={() => setOpenDragNdropModal(false)} className="cancel">
              Minimize
            </button>
            {/* <button className="cancel" onClick={() => setOpenDragNdropModal(false)}>
              Cancel
            </button> */}
          </div>

        </div>

      </div>
    </Modal>
  );
};

export default DragNdrop