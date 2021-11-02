
import  { useState } from "react";
import "./index.scss"
import Modal from "../layouts/Modal"
import CancelIcon from "../../assets/icons/cancel.svg"
import {withRouter} from "react-router-dom"
import { postCall } from "../../api/request"

import EyeIcon from "../../assets/icons/eye-hide.svg"
import { useDispatch, } from "react-redux"
import cookie from "js-cookie";
import endPoint from "../../api/endPoints"
import { getProfileRequest } from "../../store/profile/actions"


export interface CardProps {
  number?: number;
  desc?: string;
  image?: string;
  charts?: any;
}

const Login = ({setIsLoginOpen, handleSignUpOpenModal}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch()


  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    // setErrorMessage("")
    // postCall(endPoint.login, userData)
    //   .then((res) => {
    //     setIsLoading(false)
    //     console.log({ res })
    //     if (res?.status === 200) {
    //       cookie.set("auth", res.data.data.auth_token);
    //       dispatch(getProfileRequest(res.data.data.user))
    //       window.location.replace("/app")
    //       return 
    //     }
    //     setErrorMessage(res.data.message)
    //     setInterval(()=>setErrorMessage(""),8000)
    //   })
  }
  return (
    <Modal>

      <div className="container">
        
          
          <div className="video-right col-lg-4 p-5">
            <div className="cancel-img ">

              <img src={CancelIcon} alt="icon" className="ml-auto"  onClick={()=>setIsLoginOpen(false)}/>
            </div>
            <br />
            
            
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

export default withRouter(Login)