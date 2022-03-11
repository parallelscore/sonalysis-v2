import React, { useState, useEffect } from 'react';
import './index.scss';
import Navbar from '../../component/Navbar';
import MouseIcon from '../../assets/images/mouse.svg';
import DataAnalysyic from '../../assets/images/analysis.jpg';
import Recruitment from '../../assets/images/recruitment.svg';
import Footer from '../../component/Footer';
import SignUpModal from '../../component/SignUpModal';
import LoginModal from '../../component/LoginModal';
import ForgotPasswordEmailModal from '../../component/ForgotPasswordEmailModal';
import EmailCodeModal from '../../component/EmailCodeModal';
import NewPasswordModal from '../../component/NewPasswordModal';
import ComingSoonModal from '../../component/ComingSoonModal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Box, Button, Text, chakra, VStack } from '@chakra-ui/react';
import OfferCard from '../../component/OfferCard';
import FooterHero from '../../component/FooterHero';


export interface CardProps {
    number?: number;
    desc?: string;
    image?: string;
    charts?: any;
}

const Home = () => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isForgotEmail, setIsForgotEmail] = useState(false);
    const [isEmailCode, setIsEmailCode] = useState(false);
    const [isNewPassword, setIsNewPassword] = useState(false);
    const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
    const [resetUserData, setResetUserData] = useState({});

    const executeScroll = () => {
        var element = document.getElementById("started")
        element?.scrollIntoView()
    } 

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
    const handleForgotEmailModal = () => {
        setIsLoginOpen(false);
        setIsForgotEmail(true);
    };
    const handleLoginOpenModal = () => {
        setIsSignUpOpen(false);
        setIsForgotEmail(false);
        setIsEmailCode(false);
        setIsNewPassword(false);
        setIsLoginOpen(true);
    };
    const handleEmailCode = () => {
        setIsForgotEmail(false);
        setIsSignUpOpen(false);
        setIsForgotEmail(false);
        setIsNewPassword(false);
        setIsEmailCode(true);
    };
    const handleNewPassword = (data) => {
        setIsForgotEmail(false);
        setIsSignUpOpen(false);
        setIsForgotEmail(false);
        setIsNewPassword(true);
        setResetUserData(data);
    };
    return (
        <div className='home'>
            <Navbar handleLoginOpenModal={handleLoginOpenModal} />
            <div className='home-hero '>
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
                        handleForgotEmailModal={handleForgotEmailModal}
                    />
                )}
                {isForgotEmail && (
                    <ForgotPasswordEmailModal
                        setIsLoginOpen={setIsForgotEmail}
                        handleLoginOpenModal={handleLoginOpenModal}
                        handleForgotEmailModal={handleForgotEmailModal}
                        handleEmailCode={handleEmailCode}
                    />
                )}
                {isEmailCode && (
                    <EmailCodeModal
                        setIsLoginOpen={setIsForgotEmail}
                        handleLoginOpenModal={handleLoginOpenModal}
                        handleForgotEmailModal={handleForgotEmailModal}
                        handleNewPassword={handleNewPassword}
                    />
                )}
                {isNewPassword && (
                    <NewPasswordModal
                        setIsLoginOpen={setIsForgotEmail}
                        handleLoginOpenModal={handleLoginOpenModal}
                        handleForgotEmailModal={handleForgotEmailModal}
                        resetUserData={resetUserData}
                    />
                )}

                <Box data-aos="zoom-in" display="flex" alignItems="center" justifyContent="center" >
                    <VStack mt="15%" w="45%">
                        <Text pt={{base: 1, md: 10, lg: 10}} variant="header">Get Real Time Soccer Analysis</Text>
                        <Text py={{base: 1, md: 5}} variant="text">Digitalize, Optimize, Standardize, Mobilize</Text>
                        <Button onClick={()=> executeScroll()} variant="action">GET STARTED</Button>
                        <Box pt={{base: 1, md: 20}}>
                            <a href='#about'>
                                <img src={MouseIcon} alt='navigate' />
                            </a>
                        </Box>
                    </VStack>
                </Box>
            </div>
            <div className='home-about'>
                <div className='container d-flex' id="about">
                    <div className='home-about-left col-lg-6'></div>
                    <div className='home-about-right col-lg-6 ml-5'>
                        <Box lineHeight="8">
                            <Text fontSize="lg" color="GrayText">ABOUT SONALYSIS</Text>
                            <Text fontSize="3xl" fontWeight="semibold">
                                <chakra.span color="yellow">
                                    Who&nbsp;
                                </chakra.span>
                                We
                            </Text>
                            <Text fontSize="3xl" fontWeight="semibold">Are</Text> 
                        </Box>
                        <div className='home-about-right-text col-lg-8'>
                            <Text variant="body" mt="3">
                                Sonalysis is our aim at providing/delivering in
                                real time detailed analytics of a soccer game to
                                users right from their comfort in Africa and
                                beyond. We hope to distribute information to
                                both technical and non-technical users by making
                                our application user friendly and easily
                                accessible.
                            </Text>
                            <Text variant="body" mt="3">
                                Creating a web application that can collate
                                analytical data from a soccer match that will be
                                accessible to anyone.
                            </Text>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='home-analysis py-5'>
                <Text fontSize="3xl" fontWeight="semibold">
                     <chakra.span color="yellow">
                        Start Your Analysis&nbsp;
                    </chakra.span>
                    Experience Now          
                </Text>
                <Text  variant="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, nullam id aliquam.
                </Text>
            </div>
            <div className='home-coach py-5' id='started'>
                <div className='container d-lg-flex justify-content-between'>
                    <div className='home-coach-card mb-5'>
                        <div className='home-coach-card-title'>
                            Get started as
                        </div>
                        <h2>A COACH</h2>
                        <button onClick={handleSignUpOpenModal}>START</button>
                    </div>
                    <div className='home-coach-card mb-5'>
                        <div className='home-coach-card-title'>
                            Get started as
                        </div>
                        <h2>A PLAYER</h2>
                        <button onClick={() => setIsComingSoonOpen(true)}>
                            START
                        </button>
                    </div>
                    <div className='home-coach-card mb-5'>
                        <div className='home-coach-card-title'>
                            Get started as
                        </div>
                        <h2>AN ANALYIST</h2>
                        <button onClick={() => setIsComingSoonOpen(true)}>
                            START
                        </button>
                    </div>
                </div>
            </div>
            <div className='home-feature pt-5'>
                <div className='container'>
                    <Box lineHeight="1.5">
                        <Text fontSize="lg" color="GrayText">FEATURES</Text>
                        <Text fontSize="3xl" fontWeight="semibold">
                            What we&nbsp;
                            <chakra.span color="yellow">
                                Offer
                            </chakra.span>
                        </Text>
                        <Text fontSize="3xl" fontWeight="semibold">You</Text> 
                    </Box>
                   
                    <div className='d-lg-flex justify-content-between mt-5'>
                        <div className='home-feature-card mb-5 mb-lg-0'>
                            <OfferCard 
                            body="Leverage on the use of an AI powered system
                                in extracting analytical insights from your
                                games." 
                            image={DataAnalysyic} 
                            title="Data Analytics"/>
                        </div>
                        <div className='home-feature-card mb-5 mb-lg-0'>
                            <OfferCard 
                                body="Make actionable decision in recruiting
                                professional players for your games with our
                                AI generated player stats." 
                                image={Recruitment} 
                                title="Recruitment"/>
                        </div>
                        <div className='home-feature-card mb-5 mb-lg-0'>
                            <OfferCard 
                                body="Export action reels from soccer games in
                                seconds with our AI powered machine." 
                                image={DataAnalysyic}
                                title="Highlight Reel"/>
                        </div>
                    </div>
                    <FooterHero handleSignUpOpenModal={handleSignUpOpenModal}/>
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

export default Home;
