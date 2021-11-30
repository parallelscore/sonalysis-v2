import  { useState } from 'react';
import {  useParams } from 'react-router-dom';
import Football from '../../../assets/images/football.svg';
import { useSelector } from 'react-redux';
import './index.scss';
import { withRouter } from 'react-router-dom';

const AnalyzedMatch = () => {
    const [selectedVideo, setSelectedVideo] = useState('dribble');

    const { upload }: any = useSelector((state) => state);
    let { id } = useParams();
    const uploadData = upload.allUploadData.data.filter(
        (item) => item._id === id
    )[0];

    const { highlightreels } = uploadData.model_data;

    const keyReel: any = Object.keys(highlightreels);

    const handleVideoChange = (video) => {
        const vid: any = document.getElementById('playBackVideo');
        vid.load();
        setSelectedVideo(video);
        setTimeout(() => {
            if (vid) {
                vid.play();
            }
        }, 1000);
    };

    return (
        <div className='match-stat'>
            <h3 className='mb-4 mt-5'>HeghtLight Reels Actions</h3>

            <h3 className='mt-5'>Playing: {selectedVideo}</h3>
            <div className='video-section d-lg-flex mt-2 '>
                <div className='col-lg-6 football-vidoe mt-'>
                    <video width='320' height='240' controls id='playBackVideo'>
                        <source
                            src={highlightreels[selectedVideo]}
                            type='video/mp4'
                        />
                        {/* <source src="movie.ogg" type="video/ogg"> */}
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='video-section-right ml-5'>
                    <h3>Actions</h3>
                    <div className='d-flex flex-wrap'>
                        {keyReel.map((item) => (
                            <div
                                className='card-img'
                                onClick={() => handleVideoChange(item)}
                            >
                                <img src={Football} alt='video' />{' '}
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(AnalyzedMatch);
