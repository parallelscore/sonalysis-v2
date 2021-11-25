import { useState, useEffect } from 'react';
import './index.scss';
import Navbar from '../../component/Navbar';
import Amani from '../../assets/images/amani.png';
import Elisha from '../../assets/images/elisha.png';
import Ebube from '../../assets/images/ebube.png';
import Kelechi from '../../assets/images/kelechi.png';
import Footer from '../../component/Footer';
import SignUpModal from '../../component/SignUpModal';
import LoginModal from '../../component/LoginModal';
import ComingSoonModal from '../../component/ComingSoonModal';
import AOS from 'aos';
import 'aos/dist/aos.css';

export interface CardProps {
    number?: number;
    desc?: string;
    image?: string;
    charts?: any;
}

const About = () => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 400,
            disable: 'phone',
        });
    }, []);

    const handleSignUpOpenModal = () => {
        setIsLoginOpen(false);
        setIsSignUpOpen(true);
    };
    const handleLoginOpenModal = () => {
        setIsSignUpOpen(false);
        setIsLoginOpen(true);
    };
    return (
        <div className='about'>
            <Navbar handleLoginOpenModal={handleLoginOpenModal} />
            <div className='about-hero '>
                {isComingSoonOpen && (
                    <ComingSoonModal
                        isClose={() => setIsComingSoonOpen(!isComingSoonOpen)}
                    />
                )}
                {isSignUpOpen && (
                    <SignUpModal
                        setIsSignUpOpen={setIsSignUpOpen}
                        handleLoginOpenModal={handleLoginOpenModal}
                    />
                )}
                {isLoginOpen && (
                    <LoginModal
                        setIsLoginOpen={setIsLoginOpen}
                        handleSignUpOpenModal={handleSignUpOpenModal}
                    />
                )}
                <div className='container' data-aos='zoom-in'>
                    <h1 className='col-lg-11  mx-auto'>
                        Experience the love for the Round Leather game
                    </h1>
                </div>
            </div>
            <div className='about-about'>
                <div className='container d-flex'>
                    <div className='about-about-left col-lg-6'></div>
                    <div className='about-about-right col-lg-6 '>
                        {/* <div className="about-about-right-title" id="about">about sonalysis</div> */}
                        <h2 className=' about-about-right-header '>
                            {' '}
                            <span>Who</span> We Are
                        </h2>
                        <div className='about-about-right-text col-lg-8'>
                            <p>
                                Sonalysis is our aim at providing/delivering in
                                real time detailed analytics of a soccer game to
                                users right from their comfort in Africa and
                                beyond. We hope to distribute information to
                                both technical and non-technical users by making
                                our application user friendly and easily
                                accessible.
                            </p>
                            <p>
                                Creating a web application that can collate
                                analytical data from a soccer match that will be
                                accessible to anyone.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container d-flex second'>
                    <div className='about-about-right col-lg-6  '>
                        {/* <div className="about-about-right-title" id="about">about sonalysis</div> */}
                        <h2 className=' about-about-right-header '>
                            Our <span>Mission</span>{' '}
                        </h2>
                        <div className='about-about-right-text col-lg-10 ml-5'>
                            <p>
                                Creating a soccer analytics applications that
                                can compete with the likes of Sportlogiq for
                                real time analysis of soccer games and real time
                                delivery.
                            </p>
                        </div>
                    </div>
                    <div className='about-about-left col-lg-6'>
                        {/* <img src={StatImg} alt="stat img" /> */}
                    </div>
                </div>
            </div>

            <div className='about-feature pt-5'>
                <div className='container'>
                    <h2 className='mx-auto text-center'>
                        Meet <span>Our Team</span>
                    </h2>
                    <p className='text-center'>
                        We care about what you care about, so we deliever with
                        you in mind
                    </p>
                    <div className='d-lg-flex justify-content-between mt-5'>
                        <div className='team-card'>
                            <div className='team-photo'>
                                <img src={Ebube} alt='team avatar' />
                            </div>
                            <div className='name text-center font-weight-bolder '>
                                Ebube Oguchi
                            </div>
                            <div className='role text-center'>
                                R & D Software Engineer
                            </div>
                        </div>
                        <div className='team-card'>
                            <div className='team-photo'>
                                <img src={Elisha} alt='team avatar' />
                            </div>
                            <div className='name text-center font-weight-bolder '>
                                Elisha Odemakinde
                            </div>
                            <div className='role text-center'>Team lead</div>
                        </div>
                        <div className='team-card'>
                            <div className='team-photo'>
                                <img src={Kelechi} alt='team avatar' />
                            </div>
                            <div className='name text-center font-weight-bolder '>
                                Kelechi Oguike
                            </div>
                            <div className='role text-center'>
                                Product Designer
                            </div>
                        </div>
                        <div className='team-card'>
                            <div className='team-photo'>
                                <img src={Amani} alt='team avatar' />
                            </div>
                            <div className='name text-center font-weight-bolder '>
                                Amani Kanu
                            </div>
                            <div className='role text-center'>
                                Frontend/Mobile Engineer
                            </div>
                        </div>
                    </div>
                    <div className='about-game col-lg-10 mx-auto p-5 d-lg-flex align-items-center'>
                        <div className='about-game-left col-lg-6'>
                            <h2>Start Analyzing Your Game Today!</h2>
                            {/* <div className="about-game-left-text mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, nullam id aliquam.
              </div> */}
                        </div>
                        <div className='col-lg-6'>
                            <button
                                onClick={handleSignUpOpenModal}
                                className='mt-5 mt-lg-0 ml-5'
                            >
                                GET STARTED
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer
                handleLoginOpenModal={handleLoginOpenModal}
                handleSignUpOpenModal={handleSignUpOpenModal}
                setIsComingSoonOpen={setIsComingSoonOpen}
            />
        </div>
    );
};

export default About;
