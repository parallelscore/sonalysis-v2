import React, { useState } from 'react';
import DropdownComponent from '../PlayerComparison/DropdownComponent';
import './index.scss';
import mockVideo from './../../../../assets/images/Group 1134.png';

const videoData = [
  { id: 1, name: 'Video 1', image: mockVideo },
  { id: 2, name: 'Video 2', image: mockVideo },
  { id: 3, name: 'Video 3', image: mockVideo },
  { id: 4, name: 'Video 4', image: mockVideo },
  { id: 5, name: 'Video 5', image: mockVideo },
  { id: 6, name: 'Video 6', image: mockVideo },
  { id: 7, name: 'Video 7', image: mockVideo },
  { id: 8, name: 'Video 8', image: mockVideo },
  { id: 9, name: 'Video 9', image: mockVideo },
  { id: 10, name: 'Video 10', image: mockVideo },
  { id: 11, name: 'Video 11', image: mockVideo },
  { id: 12, name: 'Video 12', image: mockVideo },
];

const PlayerVideoComparison = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoData);

  const handleSelectVideo = (id: number) => {
    setSelectedVideo(videoData.filter((video) => video.id === id));
  };

  const videoId = selectedVideo.map((video) => video.id);
  console.log(videoId);

  return (
    <div>
      <div>
        <button className="back">&#8592; Back to analytics</button>

        <div>
          <h3 className="pt-4">Select player and video to compare</h3>
          <div className="dropdown-area">
            <div>
              <h4>Selected Videos</h4>
              <DropdownComponent
                title="Player name or number"
                size="large"
              />{' '}
            </div>

            <div className="mb-5">
              <h4>Selected Videos</h4>
              <div className="selectedVideoArea">
                <h6>The videos that you select will be shown right here</h6>
                <h6>Note: Only two videos can be selected at a time</h6>
              </div>
            </div>
          </div>

          <div>
            <button className="compare">Compare</button>{' '}
            <button className="back ml"> cancel</button>
          </div>
          <div>
            {' '}
            <div className="uploadsSection">
              <h3>Upload video</h3>
              <div className="uploadsSection__items">
                <input
                  type="search"
                  placeholder="Search for  your uploads"
                  className="uploadsSection__items__search"
                />
                <button className="compare ml">SELECT VIDEO</button>{' '}
              </div>
            </div>
            <div className="score-area">
              <div className="score-area__wrapper">
                <div className="videoUploads">
                  {videoData.map((video) => (
                    <div key={video.id}>
                      <div className="uploadImage">
                        <img
                          onClick={() => handleSelectVideo(video.id)}
                          alt={video.name}
                          src={video.image}
                        />
                        <span
                          className={`${
                            video.id === Number(videoId) && 'uploadMark'
                          }`}
                        ></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerVideoComparison;
