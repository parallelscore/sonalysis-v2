
import './index.scss';
import Logo from '../../assets/icons/logo.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Twitter from '../../assets/icons/twitter.svg';
import LinkedIn from '../../assets/icons/LinkedIn.svg';
import { Link } from 'react-router-dom';
import { SimpleGrid, Box, GridItem, Stack, Heading, Text } from '@chakra-ui/react'


const Footer = ({
    handleLoginOpenModal,
    handleSignUpOpenModal,
    setIsComingSoonOpen,
}) => {
    return (
        <div className='footer'>
            <div className='container mt-5'>
            <SimpleGrid columns={{base: 1, md: 4}} spacing={10}>
                <Stack align={{ base: 'center', lg: 'flex-start' }}>
                    <Heading size="sm" py={2}>
                        SONALYSIS
                    </Heading>
                    <Link to="/"><Text variant="linkText" align="start" fontWeight="medium"> Home </Text></Link>
                    <Link to="/about-us"><Text variant="linkText" align="start" fontWeight="medium"> About </Text></Link>
                    <Link to="/blog"><Text variant="linkText" align="start" fontWeight="medium"> Blog </Text></Link>
                    <Link to="/contact"><Text variant="linkText" align="start" fontWeight="medium"> Contact us </Text></Link>
                </Stack>
                <Stack align={{ base: 'center', lg: 'flex-start' }}>
                    <Heading size="sm" py={2}>
                        PRODUCT
                    </Heading>
                    <Text variant="linkText" onClick={() => setIsComingSoonOpen(true)} align="start" fontWeight="medium" cursor="pointer"> Request a Demo </Text>
                    <Text variant="linkText" onClick={handleLoginOpenModal} align="start" fontWeight="medium"> Login </Text>
                    <Text variant="linkText" onClick={() => setIsComingSoonOpen(true)} align="start" fontWeight="medium"> Pricing </Text>
                </Stack>
                <Stack align={{ base: 'center', lg: 'flex-start' }}>
                    <Heading size="sm" py={2}>
                        HELP
                    </Heading>
                    <Text variant="linkText" onClick={handleSignUpOpenModal} align="start" fontWeight="medium"> Getting started </Text>
                    <Text variant="linkText" onClick={() => setIsComingSoonOpen(true)} align="start" fontWeight="medium"> FAQs </Text>
                </Stack>
                <Stack align={{ base: 'center', lg: 'flex-start' }}>
                    <Heading size="sm" py={2}>
                        SUBSCRIBE
                    </Heading>
                        <form>
                            <input
                                type='text'
                                placeholder='Enter your email address'
                                className='px-3 footer-input'
                            />
                            <button className='px-4'>SEND</button>
                        </form>

                        <div className='footer-social d-flex justify-content-between mt-4'>
                            <div>
                                <img src={Facebook} alt='facebook icon' />
                            </div>
                            <div>
                                <img src={Twitter} alt='facebook icon' />
                            </div>
                            <div>
                                <img src={LinkedIn} alt='facebook icon' />
                            </div>
                        </div>
                </Stack>
                    
            </SimpleGrid>
                
            </div>
            
            <div className='container'>
                <hr className='mt-5' />
                <div className='footer-bottom py-5 d-lg-flex justify-content-between'>
                    <div className='col-lg-5'>
                        Copyright © 2021 Sonalysis.{' '}
                        <span>All rights reserved</span>
                    </div>
                    <div className='col-lg-4'>
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className='col-lg-3'>
                        <div className='d-flex justify-content-between'>
                            <Text variant="linkText" onClick={() => setIsComingSoonOpen(true)}  fontWeight="medium"> Terms & Conditions </Text>
                            <Text variant="linkText" onClick={() => setIsComingSoonOpen(true)}  fontWeight="medium"> Privacy Policy </Text>
                        </div>
                    </div>
                </div>
            </div> 
            
        </div>
    );
};

export default Footer;
