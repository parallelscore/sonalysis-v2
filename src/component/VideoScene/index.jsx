import React from 'react';

import './index.scss';

const VideoScene = ({ _id, url, className, control }) => (
    <div className={`Video__scene ${className}`}>
        <video
            controls={control || false}
            id={`${_id || 'playBackVideo'}`}
            className='video-preview'
        >
            <source
                src={url}
                type='video/mp4'
            />
            <source
                src={url}
                type='video/ogg'
            />
            Your browser does not
            support the video tag.
        </video>
    </div>
);

export default VideoScene;
