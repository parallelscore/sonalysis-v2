import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'component/Dropdown';
import VideoGroup from './VideoGroup';
import VideoSelectedGroup from 'pages/App/Analystics/PlayerVideoComparison/VideoSelectedGroup';
import { setSelectedComparisonVideos, setSelectedComparisonPlayer } from 'store/upload/actions';

import './index.scss';

// interface resourceDef { image?: string; id?: number; name?: string; team?: string; video?: string; }

const PlayerVideoComparison = (props) => {
    const [selectedVideos, setSelectedVideos] = useState<(string | number)[]>([]);
    const [players, setPlayers] = useState<(string | number)[]>([]);
    const [appearance, setAppearance] = useState<{}>({});
    const [matchInfo, setMatchInfo] = useState<{}[]>([]);
    const [selectedPlayer, setSelectedPlayer] = useState<string>('Player name or number');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const { upload: { allUploadData } }: any = useSelector((state) => state);

    const {
        match: { path },
    } = props;

    const { data } = allUploadData;
    const dispatch = useDispatch();

    const getPlayers = (selected_items) => {
        const model_data = data.filter(datum => selected_items.includes(datum._id));
        // const TeamA 
        const player_items = model_data.reduce((curr_datum, datum) => {
            const { model_data } = datum;
            const model_team_data = model_data?.TeamA?.Players.concat(model_data?.TeamB?.Players || []);
            return curr_datum.concat(model_team_data)
        }, [])

        const dict = {}
        const player_names: string[] =  []
        for (let i = 0; i < player_items.length; i++) {
            const { Name: name, Team: team } = player_items[i];
            const item = `${name} - ${team}`
            if (dict[item]) dict[item] = dict[item] + 1;
            // if (dict[item] && !player_names.includes(item)) player_names.push(String(item))
            else dict[item] = 1;
        }
        Object.keys(dict).map(key => {
            if (dict[key] > 1) player_names.push(key)
        })
        if (!player_names || !player_names.length) setSelectedPlayer('Player name or number')
        setAppearance({ ...appearance, ...dict })
        setPlayers([ ...player_names ])
    }

    const getMatchInfo = (selected_items) => {
        const model_data = data.filter(datum => selected_items.includes(datum._id));
        const dMatchInfos = model_data.map(datum => ({
            team: `${datum?.model_data?.TeamA.Players[0]?.Team} vs ${datum?.model_data?.TeamB.Players[0]?.Team}`,
            _id: datum._id,
            video: datum.last_media_url,
            ...datum?.model_data,
            TeamA: datum?.model_data?.TeamA?.Players,
            TeamB: datum?.model_data?.TeamB?.Players,
        }));

        setMatchInfo(dMatchInfos)
        dispatch(setSelectedComparisonVideos(dMatchInfos));
    }

    const handleSelectVideo = (id: number) => {
        let initialVideos = [...selectedVideos];
        const existedID = initialVideos.find( initVid => initVid === id);
        initialVideos = initialVideos.filter( initVid => initVid !== id);

        if (!existedID && selectedVideos.length >= 2) return
        initialVideos = [...initialVideos, ...(existedID ? [] : [id]) ]
        setSelectedVideos([ ...initialVideos ]);
        getPlayers(initialVideos);
        getMatchInfo(initialVideos)
    };

    const removeItem = (ID) => {
        let initialVideos = [...selectedVideos];
        initialVideos = initialVideos.filter( initVid => initVid !== ID);

        setSelectedVideos([...initialVideos ]);
    }

    const isAccurateToCompare = () => {
        const isLen = selectedVideos.length
        return ((isLen && selectedPlayer) && selectedPlayer !== 'Player name or number')
    }

    const compareFunc = () => {
        setErrorMessage('')
        const isLen = selectedVideos.length
        if ((isLen && selectedPlayer) && selectedPlayer !== 'Player name or number') {
            dispatch(setSelectedComparisonPlayer(selectedPlayer))
            props.history.push(`${path}-result`);
        } else {
            setErrorMessage('Oops! Please select the two videos to compare and the player')
        }
    }

    const cancelFunc = () => {
        setSelectedComparisonPlayer([])
        setErrorMessage('')
        setSelectedVideos([])
        setSelectedPlayer('Player name or number')
    }

    const onSelect = ({ target }) => {
        setErrorMessage('')
        if (target.text) setSelectedPlayer(target.text)
    }

    return (
        <div className='mt-5'>
            <div>
                <button className='back' onClick={() => props.history.goBack()}>
                    &#8592; Back to analytics
                </button>

                <div>
                    <h3 className='pt-4 mt-5'>Select player and video to compare</h3>
                    <div className='dropdown-area mt-5'>
                        <div>
                            <h4 className="heading-text">Selected Videos</h4>
                            <Dropdown select={onSelect} items={players} title={selectedPlayer} size='large' />{' '}
                            <p><small className="error-message-text">{errorMessage}</small></p>
                        </div>

                        <VideoSelectedGroup selectedItems={selectedVideos} remove={removeItem} videos={matchInfo} />
                    </div>

                    <div>
                        <button onClick={compareFunc} className={`compare${isAccurateToCompare() ? '-active' : ''} heading-text`}>Compare</button>{' '}
                        <button onClick={cancelFunc} className='back ml heading-text'> cancel</button>
                    </div>
                    <div>
                        {' '}
                        <div className='uploadsSection'>
                            <h3>Upload video</h3>
                            <div className='uploadsSection__items'>
                                <input
                                    type='search'
                                    placeholder='Search for  your uploads'
                                    className='uploadsSection__items__search margin-right-lg'
                                />
                                <button className='Selected_Video_Button'>
                                    <span className="width-sm paragraph-text">{selectedVideos.length ? `SELECTED ${selectedVideos.length}` : "SELECT VIDEO"}</span>
                                </button>{' '}
                            </div>
                        </div>
                        <VideoGroup onSelect={handleSelectVideo} selectedVideos={selectedVideos} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(PlayerVideoComparison);
