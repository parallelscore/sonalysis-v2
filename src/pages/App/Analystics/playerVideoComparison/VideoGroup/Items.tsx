import VideoScene from 'component/VideoScene';
import React from 'react';

const VideoItem = ({ item, select, selectedVideos }) => {
    const videoA = selectedVideos.length && selectedVideos[0];
    const videoB = selectedVideos.length && selectedVideos[1];

    const isSelected = (currentID: (string | number), videoId: (string | number)) => currentID === videoId

    return (
        <div key={item._id}>
            <div
                className='uploadImage'
                onClick={select}
            >
                <div className='video-container mb-4'>
                    <VideoScene {...item} control={false} url={item.last_media_url} className="video-preview" />
                    {(isSelected(item._id, videoA) || isSelected(item._id, videoB)) && (
                        <span className='uploadMark'>{' '} &#10003;</span>
                    )}
                    <div className='team mt-3'>
                        <span>Teams:</span>{' '}
                        {item?.model_data?.TeamA.Players[0]?.Team} vs {item?.model_data?.TeamB.Players[0]?.Team}
                    </div>
                    <div className='team mt-2'>
                        <span> Competition:</span>{' '}
                        Premier League
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
