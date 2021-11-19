
import React, { useState } from "react";
import "./index.scss"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/icons/logo.svg"

export interface CardProps {
  number?: number;
  desc?: string;
  image?: string;
  charts?: any;
}

const NavBar = ({handleLoginOpenModal}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <NavLink to="/" className="navbar-brand"><img src={Logo} alt="logo"  /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse d-lg-flex align-items-center ml-auto" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" activeStyle={{
    fontWeight: "bold",
    color: "#811AFF"
  }} className="nav-link" activeClassName="activeClass" aria-current="page"  >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about-us" className="nav-link" activeClassName="activeClass" aria-current="page" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blog" className="nav-link" activeClassName="activeClass" aria-current="page">blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" activeClassName="activeClass" aria-current="page">Contact us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="activeClass" aria-current="page"><button onClick={handleLoginOpenModal}>Login</button></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/#eng" className="nav-link" activeClassName="activeClass" aria-current="page">ENG</NavLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
  );
};

export default NavBar