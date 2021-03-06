
import './index.scss';
import Logo from '../../assets/icons/logo.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Twitter from '../../assets/icons/twitter.svg';
import LinkedIn from '../../assets/icons/LinkedIn.svg';
import { Link } from 'react-router-dom';

const Footer = ({
    handleLoginOpenModal,
    handleSignUpOpenModal,
    setIsComingSoonOpen,
}) => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='d-lg-flex'>
                    <div className='col-lg-3'>
                        <div className='footer-title'>SONALYSIS</div>

                        <ul className=''>
                            <li className='cursor'>
                                <Link to='/'> Home </Link>
                            </li>
                            <li className='cursor'>
                                <Link to='/about-us'> About</Link>
                            </li>
                            <li className='cursor'>
                                <Link to='/blog'> Blog</Link>
                            </li>
                            <li className='cursor'>
                                <Link to='/contact'> Contact us </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-3'>
                        <div className='footer-title'>PRODUCT</div>

                        <ul className=''>
                            <li
                                className='cursor'
                                onClick={() => setIsComingSoonOpen(true)}
                            >
                                Request a Demo
                            </li>
                            <li
                                onClick={handleLoginOpenModal}
                                className='cursor'
                            >
                                Login
                            </li>
                            <li
                                className='cursor'
                                onClick={() => setIsComingSoonOpen(true)}
                            >
                                Pricing
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-3'>
                        <div className='footer-title'>HELP</div>

                        <ul className=''>
                            <li
                                className='cursor'
                                onClick={handleSignUpOpenModal}
                            >
                                Getting started
                            </li>
                            <li
                                className='cursor'
                                onClick={() => setIsComingSoonOpen(true)}
                            >
                                FAQs
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-3'>
                        <div className='footer-title'>SUBSCRIBE</div>
                        <form>
                            <input
                                type='text'
                                placeholder='Enter your email address'
                                className='px-3'
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
                    </div>
                </div>
            </div>
            <div className='container'>
                <hr className='mt-5' />
                <div className='footer-bottom py-5 d-lg-flex justify-content-between'>
                    <div className='col-lg-5'>
                        Copyright ?? 2021 Sonalysis.{' '}
                        <span>All rights reserved</span>
                    </div>
                    <div className='col-lg-4'>
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className='col-lg-3'>
                        <div className='d-flex justify-content-between'>
                            <div
                                className='cursor'
                                onClick={() => setIsComingSoonOpen(true)}
                            >
                                Terms & Conditions
                            </div>
                            <div
                                className='cursor'
                                onClick={() => setIsComingSoonOpen(true)}
                            >
                                Privacy Policy
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
