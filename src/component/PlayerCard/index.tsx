import { useState} from 'react';
import './index.scss';
import EditPen from '../../assets/icons/edit-pen.svg';
import EditPlayer from '../EditPlayer';

const PlayerCard = ({ player, removePlayer }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='player-card'>
            <div className='card' key=''>
                <div className='col-12 d-flex justify-content-between align-items-center mb-4'>
                    <div
                        className='remove-player'
                        onClick={() => removePlayer(player.name)}
                    >
                        Remove
                    </div>
                    <div
                        className='edit-pen'
                        onClick={() => setShowModal(true)}
                    >
                        <img src={EditPen} alt='edit ' />
                    </div>
                </div>
                <div className='image mb-2'>
                    <img
                        src={player.photo && URL.createObjectURL(player.photo)}
                        alt='player'
                    />
                </div>
                {player.name}
                <div>{player.position}</div>
                <div className='no'>No. {player.jersey_no}</div>
            </div>
            {showModal && (
                <EditPlayer
                    setShowModal={setShowModal}
                    addPlayer=''
                    player={player}
                />
            )}
        </div>
    );
};

export default PlayerCard;
