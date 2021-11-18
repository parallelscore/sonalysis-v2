import React from 'react';
import DropdownComponent from './DropdownComponent';
import './index.scss';
const index = () => {
  return (
    <div className="mt-5 ml-4 mr-4">
      <div>
        <button>Back to analytics</button>

        <div>
          <h3 className="pt-4">Select players to compare</h3>
          <div className="dropdown-area">
            <DropdownComponent
              title="Team A"
              category="Competition"
              size="large"
            />
            <DropdownComponent
              title="Team B"
              category="Competition"
              size="large"
            />
          </div>
          <div className="dropdown-area">
            <DropdownComponent title="Player name or number" />
            <DropdownComponent title="Player name or number" />
          </div>
          <div>
            <button>Compare</button>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="score-area">SCORE CHART AREA </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
