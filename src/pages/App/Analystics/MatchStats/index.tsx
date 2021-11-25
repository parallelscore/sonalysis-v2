import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Back from '../../../../assets/icons/back-arrow.svg';
import Football from '../../../../assets/images/football.svg';
import { useSelector } from 'react-redux';
import './index.scss';
import { withRouter } from 'react-router-dom';

const AnalyzedMatch = (props) => {
    const [timer, setTimer] = useState(0);
    const [actionName, setActionName] = useState<any>('red_card');
    const { upload }: any = useSelector((state) => state);

    let { id } = useParams();
    const uploadData = upload.allUploadData.data.filter(
        (item) => item._id === id
    )[0];

    const { actions } = uploadData.model_data;

    const actionDisplay = Object.values(actions);
    const actionUniqueArr: any = [];
    actionDisplay.forEach((item: any) => {
        !actionUniqueArr.includes(item[0]) && actionUniqueArr.push(item[0]);
    });
    const filterAction = actionDisplay.filter(
        (item: any) => item[0] === actionName
    );

    const videoURL = `https://sonalysis-service.s3.amazonaws.com/${uploadData.last_media_url}`;



    const handleVideoChange = (time) => {
        const vid: any = document.getElementById('playBackVideo');
        setTimer(time);
        vid.load();
        clearInterval(videoInter);

        setTimeout(() => {
            vid.pause();
            if (vid) {
                vid.play();
                vid.currentTime = time;
            }
        }, 1000);
    };

    const videoInter = setInterval(() => {
        const vid: any = document.getElementById('playBackVideo');
        if (vid?.currentTime > timer + 4) {
            vid.pause();
            clearInterval(videoInter);
        }
    }, 1000);

    return (
        <div className='match-stat'>
            <div
                className='d-flex mt-5 mb-5 mr-3 back'
                onClick={() => props.history.goBack()}
            >
                <img src={Back} alt='back arrow' /> Back to Match Stats
            </div>

            <h3 className='mb-4'>Actions</h3>
            <div className='d-flex flex-wrap'>
                {actionUniqueArr.map((item) => (
                    <div
                        className={`card d-flex mr-4 p-3 text-black m-2 ${
                            item === actionName && 'active-card'
                        }`}
                        onClick={() => setActionName(item)}
                    >
                        <img src={Football} alt='video' />
                        <div>
                            <div className='text-center mt-3'>{item}</div>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className='mb-2 mt-5'>Actions: {actionName}</h3>

            <div className='video-section d-lg-flex '>
                <div className='col-lg-6 video-section-right ml-5'>
                    <div className=' d-lg-flex flex-wrap'>
                        {filterAction.map((actionItem: any) => (
                            <div
                                className='card-img d-flex'
                                onClick={() =>
                                    handleVideoChange(Number(actionItem[3]))
                                }
                            >
                                <img src={Football} alt='video' />
                                <div>
                                    <div>{actionItem[0]}</div>
                                    <div>
                                        {actionItem[2]} {actionItem[3]}` -{' '}
                                        {actionItem[4]}`
                                    </div>
                                    <div>By: {actionItem[1]}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-lg-6 football-vidoe mt-5'>
                    <video width='320' height='240' controls id='playBackVideo'>
                        <source src={videoURL} type='video/mp4' />
                        {/* <source src="movie.ogg" type="video/ogg"> */}
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default withRouter(AnalyzedMatch);
