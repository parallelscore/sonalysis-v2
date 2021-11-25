
import  { useState } from "react";
import "./index.scss"
import Modal from "../layouts/Modal"
import CancelIcon from "../../assets/icons/cancel.svg"
import {withRouter} from "react-router-dom"
import { putCall } from "../../api/request"


import EyeIcon from "../../assets/icons/eye-hide.svg"
import { useDispatch, useSelector } from "react-redux"
import cookie from "js-cookie";
import endPoint from "../../api/endPoints"
import swal from "sweetalert";
import { getProfileRequest } from "../../store/profile/actions"
import {
  fetchUploadRequest,
} from "../../store/upload/actions";


export interface CardProps {
  number?: number;
  desc?: string;
  image?: string;
  charts?: any;
}

const Editing = ({setIsEditOpen, handleSignUpOpenModal, editItem}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState({
    filename: "",
  });
  const { profile }: any = useSelector((state) => state);
  const dispatch = useDispatch()


  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value })
  }

  const handleFetchUploadData = () => {
    const userId = profile._id;
    const page = 1;
    const analyzed="all";
    dispatch(fetchUploadRequest(userId, page, analyzed));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setErrorMessage("")
    putCall(endPoint.updateUploadById(editItem._id), userData)
      .then((res) => {
        setIsLoading(false)
        if (res?.status === 200) {
          setIsEditOpen(false)
          handleFetchUploadData()
          swal("Video renaming was successfully", {
            icon: "success",
          });
          return 
        }
        setErrorMessage(res.data.message)
        setInterval(()=>setErrorMessage(""),8000)
      })
  }
  return (
    <Modal>

      <div className="container">
        
          
          <div className="video-right col-lg-4 p-5">
            <div className="cancel-img ">

              <img src={CancelIcon} alt="icon" className="ml-auto"  onClick={()=>setIsEditOpen(false)}/>
            </div>
            <br />
            
            <div className="login-left-text mb-3">Do you want to change "{editItem.filename}"?</div>

            <form onSubmit={handleSubmit}>
              {errorMessage&&<div className="alert alert-danger mt-3" role="alert">
                {errorMessage}
              </div>}
              <div className="mt-1">
                <label htmlFor="email">
                  New name

                </label>
                <input type="text"  name="filename" onChange={handleOnchange} />
              </div>
              
              <button disabled={isLoading}>Update {isLoading && <div className="spinner-border text-light spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>}
              </button>
            
            </form>
          </div>
        </div>

      
    </Modal>
  );
};

export default withRouter(Editing)