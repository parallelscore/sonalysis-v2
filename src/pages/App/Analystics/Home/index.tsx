import  { useState } from 'react';
import ComingSoonModal from '../../../../component/ComingSoonModal';
import { Link } from 'react-router-dom';
import './index.scss';

const Analytics = () => {
    const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

    return (
        <div className='analytics d-flex flex-column flex-lg-row justify-content-evenly '>
            {isComingSoonOpen && (
                <ComingSoonModal
                    isClose={() => setIsComingSoonOpen(!isComingSoonOpen)}
                />
            )}
            <div className='left-card col-lg-4 d-flex flex-column align-items-center justify-content-end'>
                <div className='name'>Data</div>
                <h2 className='mt-3'>Analytics</h2>
                <div className='textt col-8 text-center'>
                    Leverage on the use of an AI powered system in extracting
                    analytical insights from your games.
                </div>
                <Link to='/app/analytics/all-video'>
                    <button className=' '>OPEN</button>
                </Link>
            </div>
            <div className='right-card col-lg-4 d-flex flex-column align-items-center justify-content-end'>
                <div className='name'>PLayers</div>
                <h2 className='mt-3'>Comparison</h2>
                <div className='textt col-8 text-center'>
                    Leverage on the use of an AI powered system in extracting
                    analytical insights to compare players.
                </div>
                <button onClick={() => setIsComingSoonOpen(true)}>OPEN</button>
            </div>
        </div>
    );
};

export default Analytics;
