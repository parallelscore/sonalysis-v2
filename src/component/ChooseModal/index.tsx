import { useState } from 'react';
import './index.scss';
import Modal from '../layouts/Modal';
import CancelIcon from '../../assets/icons/cancel.svg';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { fetchUploadRequest } from '../../store/upload/actions';

export interface CardProps {
    number?: number;
    desc?: string;
    image?: string;
    charts?: any;
}

const ChooseModal = ({ setIsChooseOpen, history }) => {
    const [select, setSelect] = useState(0);

    const { profile, }: any = useSelector((state) => state);
    const dispatch = useDispatch();

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const handleFetchUploadData = () => {
        const userId = profile._id;
        const page = 1;
        const analyzed = true;
        dispatch(fetchUploadRequest(userId, page, analyzed, () => {
            history.push('/app/analytics/player-video-comparison')
        }));
    };

    const handleRedirect = () => {
        if (select === 1) {
            return history.push('/app/analytics/player-comparison');
        }
        if (select === 2) {
            return handleFetchUploadData()
            // return history.push('/app/analytics/player-video-comparison');
        }
        alert('here' + select);
    };

    return (
        <Modal isClose={() => setIsChooseOpen(false)}>
            <div className='container'>
                <div
                    className='choose col-lg-8 mx-auto'
                    onClick={stopPropagation}
                >
                    <div className='cancel-img '>
                        <img
                            src={CancelIcon}
                            alt='icon'
                            className='ml-auto'
                            onClick={() => setIsChooseOpen(false)}
                        />
                    </div>
                    <div className='title text-center'>
                        Choose your mode of comparison
                    </div>
                    <div className='word text-center'>
                        It helps if the video is a high quality video as it
                        gives a more precise analysis
                    </div>
                    <div className='cards d-flex justify-content-between mt-5'>
                        <div
                            className={`cards-left col-5 ${
                                select === 1 && 'active-card'
                            }`}
                            onClick={() => setSelect(1)}
                        >
                            <div className='player player-top'>Player</div>
                            <div className='vs'>VS</div>
                            <div className='player'>Player</div>
                        </div>
                        <div
                            className={`cards-right col-5 ${
                                select === 2 && 'active-card'
                            }`}
                            onClick={() => setSelect(2)}
                        >
                            <div className='player player-top text-center'>
                                Player <br /> Videos
                            </div>
                        </div>
                    </div>
                    <div className='col-9 mx-auto d-flex'>
                        <button
                            className={`btn mx-auto ${
                                select !== 0 && 'button-active'
                            }`}
                            onClick={handleRedirect}
                        >
                            CHOOSE
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default withRouter(ChooseModal);
