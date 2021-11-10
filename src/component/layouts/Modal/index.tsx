
import React, { useState } from "react";
import "./index.scss"

const Modal = (props) => {
  console.log(props.isClose)
  const closeModal =()=>{
    props.isClose && props.isClose()
    return
  }
  return (
    <div className="modal1" onClick={closeModal}>
      {props.children}
    </div>
  );
};

export default Modal