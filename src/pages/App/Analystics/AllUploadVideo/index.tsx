import React, { useState, useEffect } from "react";
import "./index.scss";
import UploadIcon from "../../../../assets/icons/upload-icon.svg";
import SearchIcon from "../../../../assets/icons/search-icon.svg";
import EmptyFile from "../../../../assets/icons/empty-file.svg";
import DragNdropModal from "../../../../component/DragNdropModal";
import UploadProgressModal from "../../../../component/UploadProgressModal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUploadRequest,
  deleteRequest,
} from "../../../../store/upload/actions";
import moment from "moment";
import { LoopingRhombusesSpinner } from "react-epic-spinners";
import swal from "sweetalert";
import { updateUpload } from "../../../../store/upload/actions";
import { baseURL } from "../../../../api/request";
import { io } from "socket.io-client";
import VideoModal from "../../../../component/videoModal ";
import EditUploadVideoModal from "../../../../component/EditUploadVideoNameModal";
import DeleteIcon from "../../../../assets/icons/deleteIcon.png";

const Analytics = () => {
  const { profile, upload }: any = useSelector((state) => state);
  const { allUploadData, getLoading, getError } = upload;

  const dispatch = useDispatch();
  const [tab, setTab] = useState(1);
  const [openDragNdropModal, setOpenDragNdropModal] = useState(false);
  const [openProgressModal, setOpenProgressModal] = useState(false);
  const [showProgressOnly, setShowProgressOnly] = useState(false);
  const [singleData, setSingleData] = useState({});
  const [videoURL, setvideoURL] = useState(
    "https://drive.google.com/file/d/1htoCdTxcZJL2Pt8Ae6P4AB_O90MeT52X/view?usp=sharing"
  );
  const [isVidoURLModalOpen, setIsVidoURLModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editItem, setIsEditItem] = useState({});

  useEffect(() => {
    const socket = io(`${baseURL}`);

    socket.on("analyzed video", (uploadProgress) => {
      uploadProgress && dispatch(updateUpload(uploadProgress));
    });
  }, []);

  useEffect(() => {
    const userId = profile._id;
    handleFetchData({ userId, page: 1, analyzed: "all" });
  }, []);

  const handleFetchData = ({ userId, page = 1, analyzed }) => {
    dispatch(fetchUploadRequest(userId, page, analyzed));
  };

  const handleShowEditing = (item) => {
    setIsEditOpen(true);
    setIsEditItem(item);
  };
  const showVideoModal = (url) => {
    setIsVidoURLModalOpen(true);
    setvideoURL(url);
  };

  const handleVideoDelete = ({ id, name }) => {
    swal({
      title: `You are about deleting ${name}`,
      text: "Once deleted, you will not be able to recover this video",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await dispatch(deleteRequest(id));
        setOpenProgressModal(false);
        swal("Video deleted successfully", {
          icon: "success",
        });
        const userId = profile._id;
        handleFetchData({ userId, page: 1, analyzed: "all" });
      }
      // else {
      //   swal("Your imaginary file is safe!");
      // }
    });
  };

  const handleChangeTab = (tab, analyzed) => {
    console.log({ tab, analyzed });
    const userId = profile._id;
    setTab(tab);
    handleFetchData({ userId, page: 1, analyzed });
  };

  const handleOpenModal = (progress) => {
    setShowProgressOnly(progress);
    !progress && setOpenDragNdropModal(true);
    progress && setOpenProgressModal(true);
  };
  const handleRedirect = (isRedirect, state) => {
    setSingleData(state);
    isRedirect
      ? window.location.replace(`/app/analytics/match/${state._id}`)
      : setOpenProgressModal(true);
  };

  return (
    <div className="all-video">
      {isVidoURLModalOpen && (
        <VideoModal
          vidoeURL={videoURL}
          isClose={() => setIsVidoURLModalOpen(false)}
        />
      )}
      {isEditOpen && (
        <EditUploadVideoModal
          setIsEditOpen={setIsEditOpen}
          editItem={editItem}
        />
      )}
      <div className="top-hero col-lg-8">
        <h2 className="col-lg-7 text-center mx-auto mb-4">
          Start Your Analysis by uploading a video
        </h2>
        <div className="text mb-4">
          Get to see metrics based on teams and players
        </div>
        <button onClick={() => handleOpenModal(false)}>
          <img src={UploadIcon} alt="upload icon" className="mr-1" /> Upload a
          video
        </button>
      </div>
      <div className="all-files">
        <div className="search-section">
          <input type="text" placeholder="Search for  your uploads" />{" "}
          <img src={SearchIcon} alt="search icon" />
        </div>
        <div className="video-tab">
          <h3 className="mb-4">Video Uploads</h3>
          <div className="tab-section">
            <div
              className={`tab ${tab === 1 && "active-tab"}`}
              onClick={() => handleChangeTab(1, "all")}
            >
              All
            </div>
            <div
              className={`tab ${tab === 2 && "active-tab"}`}
              onClick={() => handleChangeTab(2, true)}
            >
              Complete
            </div>
            <div
              className={`tab ${tab === 3 && "active-tab"}`}
              onClick={() => handleChangeTab(3, false)}
            >
              Incomplete
            </div>
          </div>

          <div className="table-head d-flex mt-5">
            <div className="col-5 pl-5">File</div>
            <div className="col-2">Status</div>
            <div className="col-2">Date</div>
          </div>
          {getLoading ? (
            <div className="d-flex align-items-center justify-content-center mt-5">
              <LoopingRhombusesSpinner color="#811aff" />
            </div>
          ) : (
            <div>
              {allUploadData?.data &&
                allUploadData?.data?.map((item, id) => (
                  <div className="table-row d-flex align-items-center p-3 mt-4">
                    <div className="col-5 d-flex align-items-center">
                      <div
                        className="mr-2 ml-3 "
                        onClick={() => showVideoModal(item.last_media_url)}
                      >
                        <video
                          width="100%"
                          height="340"
                          controls={false}
                          id="playBackVideo"
                          className="video-preview"
                        >
                          <source src={item.last_media_url} type="video/mp4" />
                          <source src={item.last_media_url} type="video/ogg" />
                          Your browser does not support the video tag.
                        </video>
                        {/* <img src={EmptyFile} alt="empty-file" className="btn" /> */}
                      </div>{" "}
                      <div
                        className=" text-wrap pl-5 ml-5 btn text-white wrap"
                        onClick={() => handleShowEditing(item)}
                      >
                        {item.filename}
                      </div>
                    </div>
                    <div
                      className={`col-2 ${
                        item.analyzed ? "success" : "pending"
                      } status`}
                    >
                      {item.analyzed ? "Success" : "Pending"}
                    </div>
                    <div className="col-2">
                      {moment(item.createdAt).startOf("minutes").fromNow()}
                    </div>
                    <div className="col-2">
                      <button
                        className={item.analyzed ? "view" : "analyzing"}
                        onClick={() => handleRedirect(item.analyzed, item)}
                      >
                        {item.analyzed ? "View analytics" : "Analyzing"}
                      </button>
                    </div>
                    <div
                      className="col-1 delete"
                      onClick={() =>
                        handleVideoDelete({ id: item._id, name: item.filename })
                      }
                    >
                      <img src={DeleteIcon} alt="delete icon" />
                    </div>
                  </div>
                ))}

              {!allUploadData?.data?.length && (
                <div className="no-file col-8 mx-auto mt-5">
                  <img
                    src={EmptyFile}
                    alt="empty-file"
                    className="mx-auto mt-4 mb-4"
                  />
                  <h3>No Files Found</h3>
                  <div className="text mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tortor, nullam id aliquam.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {openProgressModal && (
        <UploadProgressModal
          setOpenProgressModal={setOpenProgressModal}
          singleData={singleData}
          handleChangeTab={handleChangeTab}
          handleVideoDelete={handleVideoDelete}
        />
      )}
      {openDragNdropModal && (
        <DragNdropModal
          setOpenDragNdropModal={setOpenDragNdropModal}
          handleChangeTab={handleChangeTab}
        />
      )}
    </div>
  );
};

export default Analytics;
