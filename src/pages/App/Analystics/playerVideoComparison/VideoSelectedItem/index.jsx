import React from 'react';

import './index.scss';

const VideoItem = ({ item, remove }) => (
    <div className='Selected__Video_Area flex-center-display margin-y-xs'>
        <video controls={false} id='playBackVideo' className='video-preview tiny-image'>
            <source src={item?.video} type='video/mp4'/>
            <source src={item?.video} type='video/ogg'/>
            Your browser does not support the video tag.
        </video>
        {/* <img className="tiny-image" alt={item?.name} src={item?.image} /> */}
        <p className="paragraph-text padding-x-sm margin-y-zero">{item?.team}</p>
        <button onClick={() => remove()} className="Remove__item_icon">x</button>
    </div>
)

export default VideoItem;
