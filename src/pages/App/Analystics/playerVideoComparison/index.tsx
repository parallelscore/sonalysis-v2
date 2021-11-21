import React from 'react';
import DropdownComponent from '../PlayerComparison/DropdownComponent';
import './index.scss';
import mockVideo from './../../../../assets/images/Group 1134.png';

const index = () => {
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
                // category="Competition"
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
                  <img src={mockVideo} />
                  <img src={mockVideo} />
                  <img src={mockVideo} />
                  <img src={mockVideo} />
                  <img src={mockVideo} />
                  <img src={mockVideo} />
                  <img src={mockVideo} />
                  <img src={mockVideo} />
                  <img src={mockVideo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
