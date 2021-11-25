import { useState } from 'react';
import './index.scss';
import Modal from '../layouts/Modal';
import CancelIcon from '../../assets/icons/cancel.svg';
import { withRouter } from 'react-router-dom';
import { postCall } from '../../api/request';

import endPoint from '../../api/endPoints';

import swal from 'sweetalert';

export interface CardProps {
    number?: number;
    desc?: string;
    image?: string;
    charts?: any;
}

const ForgotPassword = ({
    setIsLoginOpen,
    handleLoginOpenModal,
    handleEmailCode,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [userData, setUserData] = useState({
        email: '',
    });

    const handleOnchange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');
        postCall(endPoint.sendResetPasswordEmail, userData).then((res) => {
            setIsLoading(false);
            if (res?.status === 200) {
                swal(
                    'Success',
                    `Email has been sent to ${userData.email}`,
                    'success'
                );
                handleEmailCode();
                setErrorMessage('');
                return;
            }
            setErrorMessage(res.data.message);
            setInterval(() => setErrorMessage(''), 8000);
        });
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    return (
        <Modal isClose={() => setIsLoginOpen(false)}>
            <div className='container'>
                <div
                    className='email col-lg-9 mx-auto'
                    onClick={stopPropagation}
                >
                    <div className='email-left col-5 d-none d-lg-flex'>
                        <div className='email-left-title'>RECOVER YOUR</div>
                        <h2 className='p-0'>PASSWORD</h2>
                        {/* <div className="email-left-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus rhoncus lectus posuere elit et. Odio sapien cras molestie viverra vestibulum. Eros pulvinar lacinia fermentum tincidunt fames etiam lorem.</div> */}
                    </div>
                    <div className='email-right col-lg-7 p-5'>
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
                            <span>Recover </span> Your Password
                        </h4>
                        <div className='email-right-text'>
                            Enter your email below to recover your forgotten
                            password
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
                            <div className='mt-5'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    placeholder='jimhalpert@gmail.com'
                                    name='email'
                                    onChange={handleOnchange}
                                    required
                                />
                            </div>

                            <button disabled={isLoading}>
                                Recover Password{' '}
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

export default withRouter(ForgotPassword);
