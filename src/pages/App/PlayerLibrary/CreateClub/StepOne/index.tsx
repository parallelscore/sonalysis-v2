import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Back from "../../../../../assets/icons/back-arrow.svg";
import Step1 from "../../../../../assets/images/step-1.svg";
import Step2 from "../../../../../assets/images/step-2.svg";
import EmptyFile from "../../../../../assets/icons/empty-file.svg"
import { LoopingRhombusesSpinner } from 'react-epic-spinners'
import "./index.scss"
import moment from "moment"


const CreateClub = ({handleChangeStep }) => {
  const { profile, upload }: any = useSelector((state) => state);
  const { allUploadData, getLoading, getError } = upload

  const handleVideoDelete = ({ id, name }) => {

  }

  return (
    <div className="create-club">
 
      <form className=" col-lg-8 mt-5">
        <div className="d-flex justify-content-between align-item-center">


          <div className="form-group col-lg-4">
            <label htmlFor="clubLogo" className="logo">Upload Your Logo</label>
            <input type="file" name="clubLogo" id="clubLogo" className="logo-file" />
          </div>
          <div className="col">

            <div className="form-group  d-flex justify-content-between gap-2">
              <div className="col-md-8">
                <label htmlFor="clubName">Club Name</label>
                <input type="text" className="form-control" id="clubName" placeholder="Enter club name" />
              </div>
              <div className="col-md-3">
                <label htmlFor="Abbrivation">Abbrivation</label>
                <input type="text" className="form-control" id="Abbrivation" placeholder="eg. ClubFC" />
              </div>
            </div>
            <div className="form-group  mt-4 ">

              <label htmlFor="Location">Location</label>
              <input type="text" className="form-control" id="Location" placeholder="Enter Location" />

            </div>
          </div>
        </div>
        <div className="form-group  mt-5 ">
          <div >Upload a video of your team in action</div>
          <label htmlFor="clubVideo" className="upload-video">Upload Video</label>
          <input type="file" name="clubVideo" id="clubVideo" className="logo-file" />

        </div>
      </form>
      {getLoading ? <div className="d-flex align-items-center justify-content-center mt-5"><LoopingRhombusesSpinner color="#811aff" /></div> :
        <div>
          {
            allUploadData?.data && allUploadData?.data.slice(0, 1)?.map((item, id) => (

              <div className="col-lg-6 table-row d-flex align-items-center p-3 mt-5">
                <div className="col-5 d-flex align-items-center">
                  <div className="mr-2 ml-3"><img src={EmptyFile} alt="empty-file" /></div> <div className="pl-5 ml-5">{item.filename}</div>
                </div>
                <div className={`col-2 ${item.analyzed ? "success" : "pending"} status`}>
                  {item.analyzed ? "Success" : "Pending"}
                </div>
                <div className="col-2 delete" onClick={() => handleVideoDelete({ id: item._id, name: item.filename })}>
                  Remove
                </div>
              </div>
            ))
          }
        </div>}
      <button className="btn btn-primary mt-5" onClick={()=>handleChangeStep(2)  }>
        NEXT
      </button>
    </div>
  );
};

export default withRouter(CreateClub)