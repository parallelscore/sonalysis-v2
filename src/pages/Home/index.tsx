import { useState, useEffect } from 'react';
import "./index.scss"
import Navbar from "../../component/Navbar"
import MouseIcon from "../../assets/images/mouse.svg"
import DataAnalysyic from "../../assets/images/analysis.jpg"
import Recruitment from "../../assets/images/recruitment.svg"
import Footer from "../../component/Footer"
import SignUpModal from "../../component/SignUpModal"
import LoginModal from "../../component/LoginModal"
import ComingSoonModal from "../../component/ComingSoonModal"
import AOS from 'aos'
import 'aos/dist/aos.css'

export interface CardProps {
  number?: number;
  desc?: string;
  image?: string;
  charts?: any;
}

const Home = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 400,
      disable: 'phone'
    });
  }, []);

  const handleSignUpOpenModal = () => {
    setIsLoginOpen(false)
    setIsSignUpOpen(true)
  }
  const handleLoginOpenModal = () => {
    setIsSignUpOpen(false)
    setIsLoginOpen(true)
  }
  return (
    <div className="home">
      <Navbar handleLoginOpenModal={handleLoginOpenModal} />
      <div className="home-hero " >
        {isComingSoonOpen&&<ComingSoonModal isClose={()=>setIsComingSoonOpen(!isComingSoonOpen)}/>}
          {isSignUpOpen && <SignUpModal setIsSignUpOpen={setIsSignUpOpen}  handleLoginOpenModal={handleLoginOpenModal} />}
          {isLoginOpen && < LoginModal setIsLoginOpen={setIsLoginOpen} handleSignUpOpenModal={handleSignUpOpenModal}/>}
        <div className="container" data-aos='zoom-in'>

          <h1 className="col-lg-6  mx-auto">
            Get Real Time Soccer
            Analysis
          </h1>
          <div className="home-hero-text mt-4">
            Digitalize, Optimize, Standardize, Mobilize
          </div>
          <a href="#started">

          <button >
            

            GET STARTED
            
          </button>
          </a>
          <div className="home-hero-navigate">
            <img src={MouseIcon} alt="navigate" />
          </div>
        </div>
      </div>
      <div className="home-about">
        <div className="container d-flex">
          <div className="home-about-left col-lg-6">

          </div>
          <div className="home-about-right col-lg-6 ml-5">
            <div className="home-about-right-title">about sonalysis</div>
            <h2 className=" home-about-right-header "> <span>Who</span>  We <br />Are</h2>
            <div className="home-about-right-text col-lg-8">
              <p>
                Sonalysis is our aim at providing/delivering in real time detailed analytics of a soccer game to users right from their comfort in Africa and beyond.
                We hope to distribute information to both technical and non-technical users by making our application user friendly and easily accessible.
              </p>
              <p>
                Creating a web application that can collate analytical data from a soccer match that will be accessible to anyone.
              </p>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className="home-analysis py-5">
        <h2> <span>Start Your Analysis</span> Experience Now</h2>
        {/* <div className="home-analysis-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, nullam id aliquam.</div> */}
      </div>
      <div className="home-coach py-5" id="started">
        <div className="container d-lg-flex justify-content-between">
          <div className="home-coach-card mb-5">
            <div className="home-coach-card-title">Get started as</div>
            <h2>A COACH</h2>
            <button onClick={handleSignUpOpenModal}>START</button>

          </div>
          <div className="home-coach-card mb-5">
            <div className="home-coach-card-title">Get started as</div>
            <h2>A PLAYER</h2>
            <button onClick={()=>setIsComingSoonOpen(true)}>START</button>

          </div>
          <div className="home-coach-card mb-5">
            <div className="home-coach-card-title">Get started as</div>
            <h2>AN ANALYIST</h2>
            <button onClick={()=>setIsComingSoonOpen(true)}>START</button>

          </div>
        </div>
      </div>
      <div className="home-feature pt-5">
        <div className="container">
          <div className="home-feature-title">
            features
          </div>
          <h2>What We <span>Offer</span> <br />
            You</h2>
          <div className="d-lg-flex justify-content-between mt-5">

            <div className="home-feature-card mb-5 mb-lg-0">
              <div className="img">
                <img src={DataAnalysyic} alt="" />
                <div className="home-feature-card-title mt-4">
                  Data<br />
                  <span>Analytics</span>

                </div>
                <div className="home-feature-card-text mt-4">
                Leverage on the use of an AI powered system in extracting analytical insights from your games. 
                </div>
              </div>

            </div>
            <div className="home-feature-card mb-5 mb-lg-0">
              <div className="img">
                <img src={Recruitment} alt="" />
                <div className="home-feature-card-title mt-4">
                  Recruitment
                </div>
                <div className="home-feature-card-text mt-4">
                Make actionable decision in recruiting professional players for your games with our AI generated player stats.
                </div>
              </div>

            </div>
            <div className="home-feature-card mb-5 mb-lg-0">
              <div className="img">
                <img src={DataAnalysyic} alt="" />
                <div className="home-feature-card-title mt-4">
                  Highlight<br />
                  <span>Reel</span>
                </div>
                <div className="home-feature-card-text mt-4">
                Export action reels from soccer games in seconds with our AI powered machine.
                </div>
              </div>

            </div>
          </div>
          <div className="home-game col-lg-10 mx-auto p-5 d-lg-flex align-items-center">
            <div className="home-game-left col-lg-6">

              <h2>Start Analyzing Your
                Game Today!</h2>
              {/* <div className="home-game-left-text mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, nullam id aliquam.
              </div> */}
            </div>
            <div className="col-lg-6">
              <button onClick={handleSignUpOpenModal} className="mt-5 mt-lg-0 ml-5">GET STARTED</button>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>

  );
};

export default Home