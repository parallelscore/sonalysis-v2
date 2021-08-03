
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

const DragNdrop = ({ setOpenProgressModal,  handleChangeTab }) => {
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
    console.log({ file })
    setVideoFile(file)
  }

  const handleSubmit = () => {
    const formData = new FormData()
    const file: any = videoFile
    formData.append("file", file,);
    dispatch(createUploadRequest(file, handleChangeTab)) 
  }

  


  return (
    <Modal>

      <div className="container">
        <div className="drop-n-drop col-lg-6 mx-auto p-5">

           <div className="progress-section mt-5">

            {/* <h4>Your video is being analysed</h4> */}
            <div className="text mb-5">
            Your video is being analysed
            </div>
            <div className="d-flex justify-content-between">
              <div className="folder-section">
                <img src={FolderIcon} alt="" /> {videoFile.name}
              </div>
              <div className="infor-section">
                <div className="completed">
                  {progress.percentCompleted}% Completed
                </div>
                {/* <div className="size">{Number(progress.progressEvent/1000000).toFixed(2)} MB / {Number(progress.total/1000000).toFixed(2)} MB</div> */}
              </div>
            </div>

            <div className="progress-outer">
              <div className="progress-inner" style={{ width: `${progress.percentCompleted}%` }}>

              </div>
            </div>

          </div>
          <div className="d-flex min-cancel justify-content-between mt-5 col-lg-9 mx-auto">
            <button onClick={() => setOpenProgressModal(false)}>
              Minimize
            </button>
            <button className="cancel" onClick={() => setOpenProgressModal(false)}>
              Cancel
            </button>
          </div>

        </div>

      </div>
    </Modal>
  );
};

export default DragNdrop