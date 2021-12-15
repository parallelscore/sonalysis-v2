import { useState, useEffect } from 'react';
import './index.scss';
import Modal from '../layouts/Modal';
import CancelIcon from '../../assets/icons/cancel.svg';
import EyeIcon from '../../assets/icons/eye-close.png';
import EyeIconOpen from '../../assets/icons/eye-open.png';
import endPoint from '../../api/endPoints';
import { postCall } from '../../api/request';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocation } from '../../store/locations/actions';
import swal from 'sweetalert';

export interface CardProps {
    number?: number;
    desc?: string;
    image?: string;
    charts?: any;
}

const SignUp = ({ setIsSignUpOpen, handleLoginOpenModal }) => {
    const {
        location: { data = [] },
    }: any = useSelector((state) => state);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessagePassword, setErrorMessagePassword] = useState('');
    const [showPassword, setshowPassword] = useState(false);
    const [showSuccess, setshowSuccess] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const handleOnchange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
        setErrorMessagePassword('');
    };

    function validatePassword(password) {
        //var p = document.getElementById('newPassword').value,
        const errors = [];
        if (password.length < 10) {
            setErrorMessagePassword(
                'Your password must be at least 10 characters'
            );
            return false;
        }
        if (password.search(/[a-z]/) < 0) {
            setErrorMessagePassword(
                'Your password must contain at least one lower case letter.'
            );
            return false;
        }
        if (password.search(/[A-Z]/) < 0) {
            setErrorMessagePassword(
                'Your password must contain at least one upper case letter.'
            );
            return false;
        }

        if (password.search(/[0-9]/) < 0) {
            setErrorMessagePassword(
                'Your password must contain at least one digit.'
            );
            return false;
        }
        if (password.search(/[!@#\$%\^&\*_]/) < 0) {
            setErrorMessagePassword(
                'Your password must contain at least special char from -[ ! @ # $ % ^ & * _ ]'
            );
            return false;
        }

        return true;
    }

    useEffect(() => {
        dispatch(fetchLocation());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validatePassword(userData.password)) {
            return;
        }
        setIsLoading(true);
        setErrorMessage('');
        postCall(endPoint.register, userData).then((res) => {
            setIsLoading(false);
            if (res?.status === 200) {
                setshowSuccess(true)
                
            }
            setErrorMessage(res.data.message);
            setInterval(() => setErrorMessage(''), 8000);
        });
    };
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    return (
        <Modal isClose={() => setIsSignUpOpen(false)}>
            <div className='container'>
                <div
                    className='signup col-lg-9 mx-auto'
                    onClick={stopPropagation}
                >
                    <div className='signup-left col-5 d-none d-lg-flex'>
                        <div className='signup-left-title'>Get started as</div>
                        <h1 className='p-0'>A COACH</h1>
                        {/* <div className="signup-left-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus rhoncus lectus posuere elit et. Odio sapien cras molestie viverra vestibulum. Eros pulvinar lacinia fermentum tincidunt fames etiam lorem.</div> */}
                    </div>
                    <div className='signup-right col-lg-7 p-5'>
                        <div className='cancel-img '>
                            <img
                                src={CancelIcon}
                                alt='icon'
                                className='ml-auto'
                                onClick={() => setIsSignUpOpen(false)}
                            />
                        </div>
                        <br />
                        {!showSuccess && (
                            <div>
                                <h4>
                                    <span>Unlock</span> Your Full Potential
                                </h4>
                                <div className='signup-right-text'>
                                    Please fill in the following details to
                                    begin your rich experience
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
                                        <label htmlFor='fullName'>
                                            Full Name
                                        </label>
                                        <input
                                            type='text'
                                            name='fullName'
                                            id='fullName'
                                            placeholder='First and Last Name'
                                            onChange={handleOnchange}
                                            required
                                        />
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor='email'>Email</label>
                                        <input
                                            type='email'
                                            name='email'
                                            id='email'
                                            placeholder='jimhalpert@gmail.com'
                                            onChange={handleOnchange}
                                            required
                                        />
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor='Country'>Country</label>
                                        <select
                                            name='country'
                                            id='country'
                                            onChange={handleOnchange}
                                            required
                                        >
                                            <option value=''>
                                                Please select a country
                                            </option>
                                            {data?.map((country, index) => (
                                                <option
                                                    value={country.country}
                                                    key={index}
                                                >
                                                    {country.country}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor='club'>
                                            Soccer club
                                        </label>
                                        <input
                                            type='text'
                                            name='club'
                                            id='club'
                                            placeholder='Enter name of the club'
                                            onChange={handleOnchange}
                                            required
                                        />
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor='password'>
                                            Password
                                        </label>
                                        <div className='password-container d-flex align-items-center justify-content-center'>
                                            <input
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                placeholder='**********'
                                                name='password'
                                                onChange={handleOnchange}
                                                required
                                                onBlur={(e) =>
                                                    validatePassword(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <img
                                                src={
                                                    !showPassword
                                                        ? EyeIcon
                                                        : EyeIconOpen
                                                }
                                                alt='show password'
                                                className='hide-eye'
                                                onClick={() =>
                                                    setshowPassword(
                                                        !showPassword
                                                    )
                                                }
                                            />
                                        </div>
                                        <p className='pass-error'>
                                            {errorMessagePassword}
                                        </p>
                                    </div>
                                    <button disabled={isLoading}>
                                        Create a Free Account{' '}
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

                                    <div className='get-start mt-2'>
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
                        )}
                        {showSuccess && (
                            <div className="mt-5">
                                <h4>
                                    <span>Account</span> created successfully
                                </h4>
                                <div className='signup-right-text'>
                                    We have sent a confirmation email to{' '}
                                    {userData.email}
                                </div>
                                <button onClick={() => setIsSignUpOpen(false)}>
                                        Close
                                    </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SignUp;
