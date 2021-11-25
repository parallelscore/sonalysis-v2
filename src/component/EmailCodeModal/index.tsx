import { useState } from "react";
import "./index.scss";
import Modal from "../layouts/Modal";
import CancelIcon from "../../assets/icons/cancel.svg";
import { withRouter } from "react-router-dom";
import { getCall } from "../../api/request";
import swal from "sweetalert";

import endPoint from "../../api/endPoints";

export interface CardProps {
  number?: number;
  desc?: string;
  image?: string;
  charts?: any;
}

const Code = ({ setIsLoginOpen, handleLoginOpenModal, handleNewPassword }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState({
    code: "",
  });

  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    getCall(endPoint.confirmResetPasswordCode(userData.code), userData).then(
      (res) => {
        setIsLoading(false);
        if (res?.status === 200) {
          swal("Success", `code verified`, "success");
          handleNewPassword(res.data.data.user);
          setErrorMessage("");
          return;
        }
        setErrorMessage(res.data.message);
        setInterval(() => setErrorMessage(""), 8000);
      }
    );
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <Modal isClose={() => setIsLoginOpen(false)}>
      <div className="container">
        <div className="email col-lg-9 mx-auto" onClick={stopPropagation}>
          <div className="email-left col-5 d-none d-lg-flex">
            <div className="email-left-title">VERIFY</div>
            <h2 className="p-0">CODE</h2>
            {/* <div className="email-left-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus rhoncus lectus posuere elit et. Odio sapien cras molestie viverra vestibulum. Eros pulvinar lacinia fermentum tincidunt fames etiam lorem.</div> */}
          </div>
          <div className="email-right col-lg-7 p-5">
            <div className="cancel-img ">
              <img
                src={CancelIcon}
                alt="icon"
                className="ml-auto"
                onClick={() => setIsLoginOpen(false)}
              />
            </div>
            <br />
            <h4>
              <span>Verify </span> Code
            </h4>
            <div className="email-right-text">
              A code has been sent to your email. Enter the code to reset your
              password
            </div>
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <div className="alert alert-danger mt-3" role="alert">
                  {errorMessage}
                </div>
              )}
              <div className="mt-5">
                <label htmlFor="code">Verification Code</label>
                <input
                  type="text"
                  id="code"
                  placeholder="code here"
                  name="code"
                  onChange={handleOnchange}
                  required
                />
              </div>

              <button disabled={isLoading}>
                Confirm Code
                {isLoading && (
                  <div
                    className="spinner-border text-light spinner-border-sm"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
              </button>
              <div className="get-start mt-3">
                Already have an account?{" "}
                <span onClick={handleLoginOpenModal} className="cursor">
                  Login
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default withRouter(Code);
