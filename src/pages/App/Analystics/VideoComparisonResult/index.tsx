import React from 'react';
import { useSelector } from 'react-redux';

// import DropdownComponent from '../PlayerComparison/DropdownComponent';
import './index.scss';
import { withRouter } from 'react-router-dom';
import VideoScene from 'component/VideoScene';
import ProgressBar from 'component/ProgressBar';
import Badge from 'component/Badge';
import Button from 'component/Button';
import ycard from '../../../../assets/images/yellow-card.svg';
import rcard from '../../../../assets/images/red-card.svg';

const matchBreakdown = [
    { key: "Ball_possession", topic: "Ball Possesion" },
    { key: "long_shot", topic: "Long Pass Acc" },
    { key: "shot", topic: "Short Pass Acc." },
    { key: "Speed", topic: "Speed" },
];

const hightlightsData = [
    { key: "goal", topic: "Goals" },
    { key: "Goal_attempt", topic: "Goal Att." },
    { key: "cornerkick", topic: "Corner K." },
    { key: "Passes ", topic: "Passes" },
    // { key: "tackle", topic: "Tackle" },
    { key: "yellow_card", image: ycard },
    { key: "red_card", image: rcard },
];

const headers = [
    { key: "team", label: "Fixtures" },
    { key: "goal", label: "Goals" },
    { key: "Goal_attempt", label: "Goal Att." },
    { key: "cornerkick", label: "Corner K." },
    { key: "Passes ", label: "Passes" },
    { key: "tackle", label: "Tackle" },
    { key: "yellow_card", label: 'Yellow Cards' },
    { key: "red_card", label: 'Red Cards' },
    { key: "Ball_possession", label: "Ball Possesion" },
    { key: "long_shot", label: "Long Pass Acc" },
    { key: "shot", label: "Short Pass Acc." },
    { key: "Speed", label: "Speed" },
];

const getPlayerInfo = (infos, playerName) => {
    let palyerInfo = infos?.TeamA.find( team => team.Name === playerName) || {};
    palyerInfo = infos?.TeamB.find( team => team.Name === playerName) || palyerInfo;
    return palyerInfo
}

const getObjectValue = (obj) => {
    if (typeof obj === 'string' || typeof obj === 'number') return obj;
    const key: any = Object.values(obj || { 0: 0 });
    const sum = key.reduce((acc, item) => acc + Number(item), 0);
    return sum;
};

const getData = (data) => {
    const newData = {}
     Object.keys(data).map(datum => {
        headers.map(({ key }) => {
            newData[key] = getObjectValue(data[key])
        })
    })
    return newData;
}

const PlayerVideoComparison = (props) => {
    const { upload }: any = useSelector((state) => state);
    const { allUploadData, selectedComparisonVideos, selectedComparisonPlayer } = upload

    const { data } = allUploadData;

    const playerName = selectedComparisonPlayer.split('-')[0].trim()
    let currentPlayerInfo = getPlayerInfo(selectedComparisonVideos[0], playerName);
    let currentPlayerInfo2 = getPlayerInfo(selectedComparisonVideos[1], playerName);
    const comparisonList = new Array(2).fill('');

    console.log('currentPlayerInfo', currentPlayerInfo)
    console.log('currentPlayerInfo2', currentPlayerInfo2)

    const games = [getData(currentPlayerInfo), getData(currentPlayerInfo2)];

    console.log('games', games)

    return (
        <div className='mt-5'>
            <div>
                <button className='back' onClick={() => props.history.goBack()}>
                    &#8592; Back to analytics
                </button>

                <div>
                    <h3 className='pt-4 mt-5'>
                        Comparison results
                    </h3>
                    <div className='download-wrapper'>
                        <Button data={games} headers={headers} type="download" text="DOWNLOAD MATRICS" className="Download_Result_Button paragraph-text" />
                        {/* <button className='Download_Result_Button paragraph-text'>DOWNLOAD MATRICS</button> */}
                    </div>                
                </div>
            </div>

            <div className="Video__result">
                <div className="Video__result_profile_wrapper">
                    <img src={currentPlayerInfo.Image || currentPlayerInfo2.Image} alt={currentPlayerInfo.Name} />
                    <div className="Result__profile_content">
                        <h6>{selectedComparisonPlayer.split('-')[0]}</h6>
                        <h6 className="medium-emphasis capitalize">{currentPlayerInfo.Position || currentPlayerInfo2.Position}</h6>
                        <h6 className="medium-emphasis">No. 10</h6>
                    </div>
                </div>

                <article className="Overall__hightlight">
                    <div className="Video__hightlights">
                        {selectedComparisonVideos.map(selectedComparisonVideo => (
                            <div className="Display__min_width">
                                <VideoScene _id={selectedComparisonVideo?._id} url={selectedComparisonVideo?.video} control={false} className="Video__scene_resize" />
                                <h3 className="paragraph-text margin-y-xs"><span className="medium-emphasis">Teams: </span>{selectedComparisonVideo?.team}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="medium-emphasis text-center heading-text-medium">Comparison Stats</div>

                    <div className="Video__hightlights">
                        {comparisonList.map((arr, ind) => (
                            <div key={`match-breakdown-${ind}`} className="Display__min_width margin-y-xs">
                            {matchBreakdown.map(({ key, topic }) => (
                                    <div key={`${key}-${ind}`}>
                                        <ProgressBar className="" progress={getObjectValue(currentPlayerInfo[key])} />
                                        <div className="flex-between-display margin-y-xs">
                                            <h3 className="paragraph-text medium-emphasis">{topic}</h3>
                                            <h3 className="paragraph-text">{getObjectValue(currentPlayerInfo[key])}%</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}

                    </div>

                    <div className="Video__hightlights">
                        {comparisonList.map((arr, ind) => (
                            <div key={`hightlight-${ind}`} className="Display__min_width margin-y-xs">
                                <div className="flex-between-display margin-y-xs">
                                    {hightlightsData.map(({ key, topic, image }) => (
                                        <Badge key={`${key}-${ind}`} className="margin-y-xs" image={image} text={getObjectValue(currentPlayerInfo[key])} topic={topic} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </article>

            </div>
        </div>
    );
};

export default withRouter(PlayerVideoComparison);
