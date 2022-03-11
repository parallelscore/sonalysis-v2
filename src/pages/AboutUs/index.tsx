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
import { HStack, Box, Button, Text, chakra, VStack,Center } from '@chakra-ui/react';
import MouseIcon from '../../assets/images/mouse.svg';
import FooterHero from '../../component/FooterHero';


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
                <Box data-aos="zoom-in" display="flex" alignItems="center" justifyContent="center" >
                    <VStack mt="5%" w="45%">
                        <Text pb="10" variant="body">HOME / ABOUT US</Text>
                        <Text pb="10" variant="header">
                            <chakra.span color="yellow">
                                Who&nbsp;
                            </chakra.span>
                            We Are
                        </Text>
                        <Text pb="10" variant="text">
                            Sonalysis is our aim at providing/delivering in real time detailed analytics of
                            a soccer game to users right from their comfort in Africa and beyond. We
                            hope to distribute information to both technical and non-technical users
                            by making our application user friendly and easily accessible.
                            Creating a web application that can collate analytical data from a soccer
                            match that will be accessible to anyone.

                        </Text>
                        <HStack>
                            <Button variant="action"> REQUEST A DEMO </Button>
                            <Button variant="outline"> CONTACT US </Button>
                        </HStack>
                        <Box pt="20">
                            <a href='#team'>
                                    <img src={MouseIcon} alt='navigate' />
                            </a>
                        </Box>
                    </VStack>
                </Box>
            </div>
           
            <div className='about-feature pt-5' id="team">
                <div className='container'>
                    <Text textAlign="center" fontSize="3xl" fontWeight="semibold">
                        Meet&nbsp;
                        <chakra.span color="yellow">
                            Our Team
                        </chakra.span>
                    </Text>
                    <Center textAlign="center">
                        <Text w="60%" variant="text">
                            Our mission is to crerate a soccer analytics applications that can compete with the likes of Sportlogiq
                            for real time analysis of soccer games and real time delivery.
                        </Text>
                    </Center>
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

export default About;
