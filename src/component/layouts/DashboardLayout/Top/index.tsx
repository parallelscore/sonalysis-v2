import './index.scss';
import {useState} from "react"
import WaveIcon from '../../../../assets/icons/waving-hand.svg';
import Notification from '../../../../assets/icons/notification.svg';
import Avatar from '../../../../assets/images/avatar.svg';
import { useSelector } from 'react-redux';
import ComingSoonModal from 'component/ComingSoonModal';

export interface CardProps {
    number?: number;
    desc?: string;
    image?: string;
    charts?: any;
}

const Top = () => {
    const { profile }: any = useSelector((state) => state);
    const [closeModal, setCloseModal] = useState(false)
    return (
        <div className='top'>
            {closeModal&&<ComingSoonModal isClose={()=>setCloseModal(false)}/>}
            <div className='left'>
                <div className='name'>
                    Hi {profile?.fullName?.split(' ')[0]},
                </div>
                <div className='name'>
                    Welcome <img src={WaveIcon} alt='waving hand' />
                </div>
            </div>
            <div className='right'>
                <div className='notification' onClick={()=>setCloseModal(true)}>
                    <img src={Notification} alt='Notification' />
                </div>
                <div className='avatar d-flex align-items-center justify-content-between' onClick={()=>setCloseModal(true)}>
                    <div className='photo mr-4'>
                        <img src={Avatar} alt='avatar' />
                    </div>
                    <div className='ml-5'>
                        <div className='name'>{profile?.fullName}</div>
                        <div className='name'>
                            Coach
                            <img src={WaveIcon} alt='waving hand' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;
