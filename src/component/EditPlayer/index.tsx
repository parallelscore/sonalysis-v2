import { useState } from 'react';
import './index.scss';

import Modal from '../layouts/Modal';

const EditModal = ({ setShowModal, clubDetail, player }: any) => {
    const [singlePlayer, setSinglePlayer] = useState(player);
    const [filePhoto, setFilePhoto] = useState('');

    const [playerData, setPlayerData] = useState({
        name: '',
        photo: '',
        club_name: clubDetail?.name || '',
        position: '',
        jersey_no: '',
        reason: '',
        status: 'pending',
        club_id: clubDetail?._id || '',
    });

    const handleOnchange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'photo') {
            name === 'photo' &&
                setFilePhoto(URL.createObjectURL(e.target.files[0]));
            return setPlayerData({ ...playerData, [name]: e.target.files[0] });
        }
        return setPlayerData({ ...playerData, [name]: value });
    };

    const addData = (data) => {
        setSinglePlayer([playerData, data]);
        setShowModal(false);
    };
    //This is the bupdated player

    return (
        <Modal>
            <div className='container'>
                <div className='edit-player col-lg-6 mx-auto p-5'>
                    <>
                        <h4 className='text-center'>Player details</h4>
                        <form className=' col-lg-10 mt-5 mx-auto'>
                            <div className='form-group col-lg-4 mx-auto'>
                                <label htmlFor='clubLogo' className='logo'>
                                    {filePhoto && (
                                        <img src={filePhoto} alt='logo' />
                                    )}
                                    {!filePhoto && 'Upload Image'}
                                </label>
                                <input
                                    type='file'
                                    name='photo'
                                    id='clubLogo'
                                    className='logo-file'
                                    accept='image/*'
                                    onChange={handleOnchange}
                                />
                            </div>
                            <div className='col mt-3'>
                                <div className='form-group  d-flex justify-content-between gap-2'>
                                    <div className='col-md-7'>
                                        <label htmlFor='clubName'>
                                            Player name
                                        </label>
                                        <input
                                            type='text'
                                            name='name'
                                            className='form-control'
                                            value={playerData?.name}
                                            id='clubName'
                                            placeholder='Enter player name'
                                            onChange={handleOnchange}
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <label htmlFor='Abbrivation'>
                                            Jersey number
                                        </label>
                                        <input
                                            type='text'
                                            name='jersey_no'
                                            value={playerData?.jersey_no}
                                            className='form-control'
                                            id='Abbrivation'
                                            placeholder='eg. 9'
                                            onChange={handleOnchange}
                                        />
                                    </div>
                                </div>
                                <div className='form-group  mt-4 '>
                                    <label htmlFor='Location'>Position</label>
                                    <input
                                        type='text'
                                        name='position'
                                        className='form-control'
                                        value={playerData?.position}
                                        id='Location'
                                        placeholder='Enter position'
                                        onChange={handleOnchange}
                                    />
                                </div>
                            </div>
                        </form>
                    </>
                    <div className='d-flex min-cancel justify-content-between mt-5 col-lg-9 mx-auto'>
                        <button
                            onClick={() => addData(playerData)}
                            className=''
                        >
                            Done
                        </button>
                        <button
                            className='cancel'
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default EditModal;
