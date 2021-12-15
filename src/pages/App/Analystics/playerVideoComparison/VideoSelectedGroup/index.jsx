import React from 'react';
import VideoItem from '../VideoSelectedItem';

import './index.scss';

const VideoSelectedGroup = ({ remove, videos, selectedItems }) => {
    const getResource = (ID) => {
        const resource = videos.find( allVid => allVid._id === ID);
        return resource;// && resource[pickItem];
    }

    return (
        <div className='mb-5 Selected__video__wrapper'>
            <h4 className="heading-text">Selected Videos</h4>
            {selectedItems.length ?
                selectedItems.map((selectedItem) => 
                    <VideoItem
                        key={`video-item-${selectedItem}`}
                        item={getResource(selectedItem)}
                        remove={() => remove(selectedItem)}
                    />
                )
            :
            <div className='selectedVideoArea'>
                <h6 className="paragraph-text">The videos that you select will be shown right here</h6>
                <h6 className="paragraph-text">Note: Only two videos can be selected at a time</h6>
            </div>
            }
        </div>
    )
}
export default VideoSelectedGroup;
