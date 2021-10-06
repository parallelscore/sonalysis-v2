
import React, { useState } from "react";
import "./index.scss"
import Modal from "../layouts/Modal"
import CancelIcon from "../../assets/icons/cancel.svg"
import { useFormik } from 'formik';
import {Redirect, withRouter} from "react-router-dom"
import { postCall } from "../../api/request"
import swal from 'sweetalert';
import EyeIcon from "../../assets/icons/eye-hide.svg"
import { useDispatch, useSelector } from "react-redux"
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
    setErrorMessage("")
    postCall(endPoint.login, userData)
      .then((res) => {
        setIsLoading(false)
        console.log({ res })
        if (res?.status === 200) {
          cookie.set("auth", res.data.data.auth_token);
          dispatch(getProfileRequest(res.data.data.user))
          window.location.replace("/app")
          return 
        }
        setErrorMessage(res.data.message)
        setInterval(()=>setErrorMessage(""),8000)
      })
  }
  return (
    <Modal>

      <div className="container">
        <div className="login col-lg-9 mx-auto">
          <div className="login-left col-5 d-none d-lg-flex">
            <div className="login-left-title">continue as</div>
            <h1 className="p-0">
              A COACH
            </h1>
            <div className="login-left-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus rhoncus lectus posuere elit et. Odio sapien cras molestie viverra vestibulum. Eros pulvinar lacinia fermentum tincidunt fames etiam lorem.</div>
          </div>
          <div className="login-right col-lg-7 p-5">
            <div className="cancel-img ">

              <img src={CancelIcon} alt="icon" className="ml-auto"  onClick={()=>setIsLoginOpen(false)}/>
            </div>
            <br />
            <h4><span>Continue</span> Your Analysis, Coach</h4>
            <div className="login-right-text">
              Welcome back and get to see what has been happening
              since you’ve been gone
            </div>
            <form onSubmit={handleSubmit}>
              {errorMessage&&<div className="alert alert-danger mt-3" role="alert">
                {errorMessage}
              </div>}
              <div className="mt-5">
                <label htmlFor="email">
                  Email

                </label>
                <input type="email" placeholder="jimhalpert@gmail.com" name="email" onChange={handleOnchange} />
              </div>
              <div className="mt-4">
                <label htmlFor="password">
                  Password
                </label>
                <div className="password-container d-flex align-items-center justify-content-center">

                <input type={showPassword?"text":"password"} placeholder="**********" name="password" onChange={handleOnchange} />
                <img src={EyeIcon} alt="show password" className="hide-eye" onClick={()=>setshowPassword(!showPassword)} />
                </div>
              </div>
              <button disabled={isLoading}>Login {isLoading && <div className="spinner-border text-light spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>}
              </button>
              <div className="get-start mt-2">Don’t have an account? <span onClick={handleSignUpOpenModal}>Get Started</span></div>
            </form>
          </div>
        </div>

      </div>
    </Modal>
  );
};

export default withRouter(Login)