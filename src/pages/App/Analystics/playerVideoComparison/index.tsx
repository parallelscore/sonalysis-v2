import React, { useState } from 'react';
import DropdownComponent from '../PlayerComparison/DropdownComponent';
import './index.scss';
import { withRouter } from 'react-router-dom';
import mockVideo from './../../../../assets/images/Group 1134.png';

const videoData = [
    {
        id: 1,
        name: 'Video 1',
        image: mockVideo,
        team: "Manchester United vs Chelsea",
        video: 'https://sonalysis-asset.s3.amazonaws.com/3106328c-61c4-42fc-a86c-f339d5efa21b.mp4',
    },
    {
        id: 2,
        name: 'Video 2',
        image: mockVideo,
        team: "Manchester United vs Chelsea",
        video: 'https://sonalysis-asset.s3.amazonaws.com/3106328c-61c4-42fc-a86c-f339d5efa21b.mp4',
    },
    {
        id: 3,
        name: 'Video 3',
        image: mockVideo,
        team: "Manchester United vs Chelsea",
        video: 'https://sonalysis-asset.s3.amazonaws.com/3106328c-61c4-42fc-a86c-f339d5efa21b.mp4',
    },
    {
        id: 4,
        name: 'Video 4',
        image: mockVideo,
        team: "Manchester United vs Chelsea",
        video: 'https://sonalysis-asset.s3.amazonaws.com/3106328c-61c4-42fc-a86c-f339d5efa21b.mp4',
    },
    {
        id: 5,
        name: 'Video 5',
        image: mockVideo,
        team: "Manchester United vs Chelsea",
        video: 'https://sonalysis-asset.s3.amazonaws.com/3106328c-61c4-42fc-a86c-f339d5efa21b.mp4',
    },
    {
        id: 6,
        name: 'Video 6',
        image: mockVideo,
        team: "Manchester United vs Chelsea",
        video: 'https://sonalysis-asset.s3.amazonaws.com/3106328c-61c4-42fc-a86c-f339d5efa21b.mp4',
    },
    {
        id: 7,
        name: 'Video 7',
        image: mockVideo,
        team: "Manchester United vs Chelsea",
        video: 'https://sonalysis-asset.s3.amazonaws.com/3106328c-61c4-42fc-a86c-f339d5efa21b.mp4',
    },
    {
        id: 8,
        name: 'Video 8',
        image: mockVideo,
        team: "Manchester United vs Chelsea",
        video: 'https://sonalysis-asset.s3.amazonaws.com/3106328c-61c4-42fc-a86c-f339d5efa21b.mp4',
    },
    {
        id: 9,
        name: 'Video 9',
        image: mockVideo,
        team: "Manchester United vs Chelsea",
        video: 'https://sonalysis-asset.s3.amazonaws.com/3106328c-61c4-42fc-a86c-f339d5efa21b.mp4',
    },
    {
        id: 10,
        name: 'Video 10',
        image: mockVideo,
        team: "Manchester United vs Chelsea",
        video: 'https://sonalysis-asset.s3.amazonaws.com/3106328c-61c4-42fc-a86c-f339d5efa21b.mp4',
    },
    {
        id: 11,
        name: 'Video 11',
        image: mockVideo,
        team: "Manchester United vs Chelsea",
        video: 'https://sonalysis-asset.s3.amazonaws.com/3106328c-61c4-42fc-a86c-f339d5efa21b.mp4',
    },
    {
        id: 12,
        name: 'Video 12',
        image: mockVideo,
        team: "Manchester United vs Chelsea",
        video: 'https://sonalysis-asset.s3.amazonaws.com/3106328c-61c4-42fc-a86c-f339d5efa21b.mp4',
    },
];

const PlayerVideoComparison = (props) => {
    const [selectedVideo, setSelectedVideo] = useState(videoData);

    const handleSelectVideo = (id: number) => {
        setSelectedVideo(videoData.filter((video) => video.id === id));
    };

    const videoId = selectedVideo.map((video) => video.id);
    console.log(videoId);

    return (
        <div className='mt-5'>
            <div>
                <button className='back' onClick={() => props.history.goBack()}>
                    &#8592; Back to analytics
                </button>

                <div>
                    <h3 className='pt-4 mt-5'>
                        Select player and video to compare
                    </h3>
                    <div className='dropdown-area'>
                        <div>
                            <h4>Selected Videos</h4>
                            <DropdownComponent
                                title='Player name or number'
                                size='large'
                            />{' '}
                        </div>

                        <div className='mb-5'>
                            <h4>Selected Videos</h4>
                            <div className='selectedVideoArea'>
                                <h6>
                                    The videos that you select will be shown
                                    right here
                                </h6>
                                <h6>
                                    Note: Only two videos can be selected at a
                                    time
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className='compare'>Compare</button>{' '}
                        <button className='back ml'> cancel</button>
                    </div>
                    <div>
                        {' '}
                        <div className='uploadsSection'>
                            <h3>Upload video</h3>
                            <div className='uploadsSection__items'>
                                <input
                                    type='search'
                                    placeholder='Search for  your uploads'
                                    className='uploadsSection__items__search'
                                />
                                <button className='compare ml'>
                                    SELECT VIDEO
                                </button>{' '}
                            </div>
                        </div>
                        <div className='score-area'>
                            {/* <div className='score-area__wrapper'> */}
                            <div className='videoUploads1'>
                                {videoData.map((video) => (
                                    <div key={video.id}>
                                        <div
                                            className='uploadImage'
                                            onClick={() =>
                                                handleSelectVideo(video.id)
                                            }
                                        >
                                            {/* <img
                          onClick={() => handleSelectVideo(video.id)}
                          alt={video.name}
                          src={video.image}
                        /> */}
                                            <div className='video-container mb-4'>
                                                <video
                                                    controls={false}
                                                    id='playBackVideo'
                                                    className='video-preview'
                                                >
                                                    <source
                                                        src={video.video}
                                                        type='video/mp4'
                                                    />
                                                    <source
                                                        src={video.video}
                                                        type='video/ogg'
                                                    />
                                                    Your browser does not
                                                    support the video tag.
                                                </video>
                                                {video.id ===
                                                    Number(videoId) && (
                                                    <span className='uploadMark'>
                                                        {' '}
                                                        &#10003;
                                                    </span>
                                                )}
                                                <div className='team mt-3'>
                                                    <span>Teams:</span>{' '}
                                                    {video.team}
                                                </div>
                                                <div className='team mt-2'>
                                                    <span> Competition:</span>{' '}
                                                    Premier League
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(PlayerVideoComparison);
