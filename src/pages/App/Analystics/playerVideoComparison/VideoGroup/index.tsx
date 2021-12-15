import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Items';

import './index.scss';


const VideoGroup = ({ onSelect, selectedVideos }) => {
    const { upload: { allUploadData } }: any = useSelector((state) => state);

    const { data } = allUploadData;

    return (
        <div className='score-area'>
            {/* <div className='score-area__wrapper'> */}
            <div className='videoUploads1'>
                {data.map((datum) => (
                    <Item item={datum} selectedVideos={selectedVideos} select={() => onSelect(datum._id)} />
                ))}
                {/* </div> */}
            </div>
        </div>
    );
};

export default VideoGroup;
