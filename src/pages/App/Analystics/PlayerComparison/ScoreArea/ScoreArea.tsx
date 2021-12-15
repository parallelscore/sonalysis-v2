import './score-area.scss';

interface IScoreArea {
    ballPossesion: number;
    longPass: number;
    shortPass: number;
    speed: number;
}

const ScoreArea = ({ ballPossesion, longPass, shortPass, speed }: IScoreArea) => {
    return (
        <div className='scoreArea'>
            <div className='scoreArea__inner'>
                <div>
                    <div className='progress-outer'>
                        <div
                            className='progress-inner'
                            style={{
                                width: `${ballPossesion}%`,
                            }}
                        ></div>
                    </div>
                    <div className='scoreArea__textArea'>
                        <p> Ball possession </p>{' '}
                        <div className='scoreArea__textArea-stat'> {ballPossesion}%</div>
                    </div>
                    <div className='progress-outer'>
                        <div
                            className='progress-inner'
                            style={{
                                width: `${longPass}%`,
                            }}
                        ></div>
                    </div>
                    <div className='scoreArea__textArea'>
                        <p> Long pass acc. </p>{' '}
                        <p className='scoreArea__textArea-stat'> {longPass}%</p>
                    </div>
                    <div className='progress-outer'>
                        <div
                            className='progress-inner'
                            style={{
                                width: `${shortPass}%`,
                            }}
                        ></div>
                    </div>
                    <div className='scoreArea__textArea'>
                        <p> Short pass acc. </p>{' '}
                        <p className='scoreArea__textArea-stat'> {shortPass}%</p>
                    </div>{' '}
                    <div className='progress-outer'>
                        <div
                            className='progress-inner'
                            style={{
                                width: `${speed}%`,
                            }}
                        ></div>
                    </div>
                    <div className='scoreArea__textArea'>
                        <p> Speed </p>{' '}
                        <p className='scoreArea__textArea-stat'> {speed}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScoreArea;
