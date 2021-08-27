import React, { useState } from 'react';
import "./index.scss"
import { NavLink } from "react-router-dom"
import Logo from "../../../../assets/icons/logo.svg"
import DashboardIcon from "../../../../assets/icons/dashboard.svg"
import AnalysisIcon from "../../../../assets/icons/analysis.svg"
import RecruitmentIcon from "../../../../assets/icons/recruitment.svg"
import RecruitmentIconBlack from "../../../../assets/icons/recruitment-black.svg"
import ReelIcon from "../../../../assets/icons/reel.svg"
import ReelIconBlack from "../../../../assets/icons/hightlight.svg"
import LogoutIcon from "../../../../assets/icons/logout.svg"
import { logOut} from "../../../../utils"

export interface CardProps {
  number?: number;
  desc?: string;
  image?: string;
  charts?: any;
}

const Home = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const menu = [
    {
      id: 1,
      icon: DashboardIcon,
      title: "Dashboard",
      link: "/app/dashboard",
    },
    {
      id: 2,
      icon: AnalysisIcon,
      title: "Analytics",
      link: "/app/analytics",
    },
    {
      id: 3,
      icon: RecruitmentIconBlack,
      title: "Recruitment",
      link: "/app/recruitment",
    },
    {
      id: 4,
      icon: ReelIconBlack,
      title: "Highlight Reels",
      link: "/app/highlight-reels",
    },
    {
      id: 5,
      icon: ReelIconBlack,
      title: "Player Library",
      link: "/app/player-library",
    },
  ]

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <ul>
        {
          menu.map((item,index)=>(
            <li>
              <NavLink to={item.link} className="menu" activeClassName="active">

              <img src={item.icon} alt="logout" /> <div>{item.title}</div>
              </NavLink>
            </li>
          ))
        }
      </ul>
      <div className="logout-div" onClick={logOut}>
        <img src={LogoutIcon} alt="logout" /> <div>Logout</div>
      </div>
    </div>

  );
};

export default Home