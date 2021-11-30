import React from 'react';
import DropdownComponent from './DropdownComponent';
import ImageCard from './ImageCard/ImageCard';
import './index.scss';
import ScoreArea from './ScoreArea/ScoreArea';
const index = () => {
  return (
    <div className="mt-5 ml-4 mr-4">
      <div>
        <button className="back">&#8592; Back to analytics</button>

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
            <button className="compare">Compare</button>
          </div>
          <div>
            <div className="score-area">
              <div className="score-area__wrapper">
                <div>
                  <div className="score-area__wrapper__inner">
                    <div className="score-area__wrapper-text">
                      <ImageCard
                        player="Player 1"
                        position="Position"
                        number={3}
                      />
                    </div>

                    <div className="score-area__wrapper-text">
                      <ImageCard
                        player="Player 1"
                        position="Position"
                        number={13}
                      />
                    </div>
                  </div>
                  <div className="comparison">
                    <div className="comparison__wrapper">
                      <h3 className="comparison__wrapper-text">
                        {' '}
                        Comparison Stats{' '}
                      </h3>

                      <div className="comparison__score-area">
                        <div className="comparison__score-area-left">
                          <div>
                            <ScoreArea
                              title="Ball possession"
                              longPass="Long pass acc."
                              shortPass="Short pass acc."
                              speed="Speed"
                              stat={0}
                            />
                          </div>
                        </div>
                        <div className="comparison__score-area-right">
                          <ScoreArea
                            title="Ball possession"
                            longPass="Long pass acc."
                            shortPass="Short pass acc."
                            speed="Speed"
                            stat={0}
                          />
                        </div>
                      </div>
                      <div className="comparison__score-area-stats">
                        <div>
                          <p>1</p>
                          <p>1</p>
                          <p>1</p>
                          <p>1</p>
                          <p>1</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
