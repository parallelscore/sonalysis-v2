import { useState } from 'react';
import './index.scss';
import Modal from '../layouts/Modal';
import CancelIcon from '../../assets/icons/cancel.svg';
import { withRouter } from 'react-router-dom';
import { putCall } from '../../api/request';
import endPoint from '../../api/endPoints';
import EyeIcon from '../../assets/icons/eye-close.png';
import EyeIconOpen from '../../assets/icons/eye-open.png';
import swal from 'sweetalert';

export interface CardProps {
    number?: number;
    desc?: string;
    image?: string;
    charts?: any;
}

const NewPassword = ({
    setIsLoginOpen,
    handleLoginOpenModal,
    resetUserData,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setshowPassword] = useState(false);
    const [showConPassword, setShowConPassword] = useState(false);
    const [userData, setUserData] = useState({
        password: '',
        con_password: '',
    });

    const handleOnchange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (userData.password !== userData.con_password) {
            setErrorMessage('Password and confirm password does not match');
            setIsLoading(false);
            return;
        }
        setErrorMessage('');
        putCall(endPoint.changePassword(resetUserData._id), userData).then(
            (res) => {
                setIsLoading(false);
                if (res?.status === 200) {
                    swal('Success', `Reset password was successful`, 'success');
                    handleLoginOpenModal();
                    setErrorMessage('');
                    return;
                }
                setErrorMessage(res.data.message);
                setInterval(() => setErrorMessage(''), 8000);
            }
        );
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    return (
        <Modal isClose={() => setIsLoginOpen(false)}>
            <div className='container'>
                <div
                    className='password col-lg-9 mx-auto'
                    onClick={stopPropagation}
                >
                    <div className='password-left col-5 d-none d-lg-flex'>
                        <div className='password-left-title'>Set New</div>
                        <h2 className='p-0'>Password</h2>
                        {/* <div className="password-left-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus rhoncus lectus posuere elit et. Odio sapien cras molestie viverra vestibulum. Eros pulvinar lacinia fermentum tincidunt fames etiam lorem.</div> */}
                    </div>
                    <div className='password-right col-lg-7 p-5'>
                        <div className='cancel-img '>
                            <img
                                src={CancelIcon}
                                alt='icon'
                                className='ml-auto'
                                onClick={() => setIsLoginOpen(false)}
                            />
                        </div>
                        <br />
                        <h4>
                            <span>Set New </span> Password
                        </h4>
                        <div className='password-right-text'>
                            Created a new password for {resetUserData.email}
                        </div>
                        <form onSubmit={handleSubmit}>
                            {errorMessage && (
                                <div
                                    className='alert alert-danger mt-3'
                                    role='alert'
                                >
                                    {errorMessage}
                                </div>
                            )}
                            <div className='mt-4'>
                                <label htmlFor='password'>New Password</label>
                                <div className='password-container d-flex align-items-center justify-content-center'>
                                    <input
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        id='password'
                                        placeholder='**********'
                                        name='password'
                                        onChange={handleOnchange}
                                        required
                                    />
                                    <img
                                        src={
                                            showPassword ? EyeIcon : EyeIconOpen
                                        }
                                        alt='show password'
                                        className='hide-eye'
                                        onClick={() =>
                                            setshowPassword(!showPassword)
                                        }
                                    />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label htmlFor='con-password'>Password</label>
                                <div className='password-container d-flex align-items-center justify-content-center'>
                                    <input
                                        type={
                                            showConPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        id='con-passwod'
                                        placeholder='**********'
                                        name='con_password'
                                        onChange={handleOnchange}
                                        required
                                    />
                                    <img
                                        src={
                                            showConPassword
                                                ? EyeIcon
                                                : EyeIconOpen
                                        }
                                        alt='show password'
                                        className='hide-eye'
                                        onClick={() =>
                                            setShowConPassword(!showConPassword)
                                        }
                                    />
                                </div>
                            </div>

                            <button disabled={isLoading}>
                                SET NEW PASSWORD
                                {isLoading && (
                                    <div
                                        className='spinner-border text-light spinner-border-sm'
                                        role='status'
                                    >
                                        <span className='visually-hidden'>
                                            Loading...
                                        </span>
                                    </div>
                                )}
                            </button>
                            <div className='get-start mt-3'>
                                Already have an account?{' '}
                                <span
                                    onClick={handleLoginOpenModal}
                                    className='cursor'
                                >
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

export default withRouter(NewPassword);
