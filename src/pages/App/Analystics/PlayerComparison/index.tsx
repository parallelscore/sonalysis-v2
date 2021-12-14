import { useState, useEffect } from 'react';
import ImageCard from './ImageCard/ImageCard';
import './index.scss';
import ScoreArea from './ScoreArea/ScoreArea';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUploadRequest } from '../../../../store/upload/actions';
import { withRouter } from 'react-router-dom';

const Comparison = (props) => {
    const { profile, upload }: any = useSelector((state) => state);
    const { allUploadData: data, getLoading } = upload;
    const defaultData = {
        image: '',
        name: 'Player',
        position: '',
        jerseyNo: 10,
        ballPossession: 0,
        longShot: 0,
        truePasses: 0,
        speed: 0,
        goalAttempt: 0,
        goal: 0,
        shot: 0,
        passes: 0,
        cornerkick: 0,
        yellowCard: 0,
        redCard: 0,
    };

    const dispatch = useDispatch();
    const [teams, setTeams] = useState<any>([]);
    const [selectedTeams, setSelectedTeams] = useState<any>([]);
    const [selectedTeamsB, setSelectedTeamsB] = useState<any>([]);
    const [teamsPlayers, setTeamsPlayers] = useState<any>([]);
    const [teamsBPlayers, setTeamsBPlayers] = useState<any>([]);
    const [playerOneArray, setPlayerOneArray] = useState<any>([]);
    const [playerTwoArray, setPlayerTwoArray] = useState<any>([]);
    const [playerOneDetails, setPlayerOneDetails] = useState<any>(defaultData);
    const [playerTwoDetails, setPlayerTwoDetails] = useState<any>(defaultData);

    useEffect(() => {
        const userId = profile._id;
        handleFetchData({ userId, page: 1, analyzed: true });
    }, []);

    const getUniqueItem = (item) => {
        return item.filter((v, i, a) => a.indexOf(v) == i);
    };
    const handleFetchData = ({ userId, page = 1, analyzed }) => {
        dispatch(fetchUploadRequest(userId, page, analyzed));
    };

    useEffect(() => {
        const teamArr: any = [];
        data &&
            data?.data.map((item) => {
                const teamA = item.model_data.TeamA.Players[0].Team;
                const teamB = item.model_data.TeamB.Players[0].Team;
                teamArr.push(teamA);
                teamArr.push(teamB);
            });
        const unique = getUniqueItem(teamArr);
        setTeams(unique);
    }, [data]);

    const handleTeamASelect = (e) => {
        const club = e.target.value;
        let playerArr: any = [];
        let playersArray: any = [];
        data?.data.map((item) => {
            if (item.model_data.TeamA.Players[0].Team === club) {
                const players = item.model_data.TeamA.Players;
                players.map((item) => {
                    playersArray.push(item.Name);
                });
                playerArr = [...playerArr, ...players];
            }
            if (item.model_data.TeamB.Players[0].Team === club) {
                const players = item.model_data.TeamB.Players;
                players.map((item) => {
                    playersArray.push(item.Name);
                });
                playerArr = [...playerArr, ...item.model_data.TeamB.Players];
            }
            setTeamsPlayers(getUniqueItem(playersArray));
            setSelectedTeams(playerArr);
        });
    };

    const handleTeamBSelect = (e) => {
        const club = e.target.value;
        let playerArr: any = [];
        let playersArray: any = [];
        data?.data.map((item) => {
            if (item.model_data.TeamA.Players[0].Team === club) {
                const players = item.model_data.TeamA.Players;
                players.map((item) => {
                    playersArray.push(item.Name);
                });
                playerArr = [...playerArr, ...players];
            }
            if (item.model_data.TeamB.Players[0].Team === club) {
                const players = item.model_data.TeamB.Players;
                players.map((item) => {
                    playersArray.push(item.Name);
                });
                playerArr = [...playerArr, ...item.model_data.TeamB.Players];
            }
            setTeamsBPlayers(getUniqueItem(playersArray));
            setSelectedTeamsB(playerArr);
        });
    };

    const handlePlayerSelect = (e) => {
        const player = e.target.value;
        const playerDetails = selectedTeams.filter(
            (item) => item.Name === player
        );
        setPlayerOneArray(playerDetails);
    };

    const handlePlayerBSelect = (e) => {
        const player = e.target.value;
        const playerDetails = selectedTeamsB.filter(
            (item) => item.Name === player
        );
        setPlayerTwoArray(playerDetails);
    };

    const handleCompare = () => {
        if (!playerTwoArray[0]?.Name || !playerOneArray[0]?.Name) {
            return;
        }
        const playDetails = {
            image: playerOneArray[0].Image,
            name: playerOneArray[0].Name,
            position: playerOneArray[0].Position,
            jerseyNo: playerOneArray[0].Jersey_no,
            ballPossession: 0,
            longShot: 0,
            truePasses: 0,
            speed: 0,
            goalAttempt: 0,
            goal: 0,
            shot: 0,
            passes: 0,
            cornerkick: 0,
            yellowCard: 0,
            redCard: 0,
        };
        playerOneArray.map((item) => {
            if (item.Ball_possession) {
                playDetails.ballPossession += item.Ball_possession;
            }
            if (item.Goal_attempt) {
                playDetails.goalAttempt += item.Goal_attempt;
            }
            if (item.Speed) {
                playDetails.speed += getObjectValue(item.Speed);
            }
            if (item.long_shot) {
                playDetails.longShot += getObjectValue(item.long_shot);
            }
            if (item.shot) {
                playDetails.shot += getObjectValue(item.shot);
            }
            if (item.goal) {
                playDetails.goal += getObjectValue(item.goal);
            }
            if (item.cornerkick) {
                playDetails.cornerkick += getObjectValue(item.cornerkick);
            }
            if (item.yellow_card) {
                playDetails.yellowCard += getObjectValue(item.yellow_card);
            }
            if (item.red_card) {
                playDetails.redCard += getObjectValue(item.red_card);
            }
        });
        const playBDetails = {
            image: playerTwoArray[0].Image,
            name: playerTwoArray[0].Name,
            position: playerTwoArray[0].Position,
            jerseyNo: playerTwoArray[0].Jersey_no,
            ballPossession: 0,
            longShot: 0,
            truePasses: 0,
            speed: 0,
            goalAttempt: 0,
            goal: 0,
            shot: 0,
            passes: 0,
            cornerkick: 0,
            yellowCard: 0,
            redCard: 0,
        };
        playerTwoArray.map((item) => {
            if (item.Ball_possession) {
                playBDetails.ballPossession += item.Ball_possession;
            }
            if (item.Goal_attempt) {
                playBDetails.goalAttempt += item.Goal_attempt;
            }
            if (item.Speed) {
                playBDetails.speed += getObjectValue(item.Speed);
            }
            if (item.long_shot) {
                playBDetails.longShot += getObjectValue(item.long_shot);
            }
            if (item.shot) {
                playBDetails.shot += getObjectValue(item.shot);
            }
            if (item.goal) {
                playBDetails.goal += getObjectValue(item.goal);
            }
            if (item.cornerkick) {
                playBDetails.cornerkick += getObjectValue(item.cornerkick);
            }
            if (item.yellow_card) {
                playBDetails.yellowCard += getObjectValue(item.yellow_card);
            }
            if (item.red_card) {
                playBDetails.redCard += getObjectValue(item.red_card);
            }
        });

        setPlayerOneDetails(playDetails);
        setPlayerTwoDetails(playBDetails);
    };

    const getObjectValue = (obj) => {
        const key: any = Object.values(obj || { 0: 0 });
        const sum = key.reduce((acc, item) => acc + Number(item), 0);
        return sum;
    };

    const playerData = [
        {
            a: playerOneDetails.goal,
            name: 'Goals Scored',
            b: playerTwoDetails.goal,
        },
        {
            a: playerOneDetails.goalAttempt,
            name: 'Goal Attempts',
            b: playerTwoDetails.goalAttempt,
        },
        {
            a: playerOneDetails.cornerkick,
            name: 'Corner Kicks',
            b: playerTwoDetails.cornerkick,
        },
        {
            a: playerOneDetails.yellowCard,
            name: 'Yellow Cards',
            b: playerTwoDetails.yellowCard,
        },
        {
            a: playerOneDetails.redCard,
            name: 'Red Cards',
            b: playerTwoDetails.redCard,
        },
    ];

    return (
        <div className='mt-5 ml-4 mr-4'>
            <div>
                <button className='back' onClick={() => props.history.goBack()}>
                    &#8592; Back to analytics
                </button>

                <div>
                    <h3 className='pt-4 mb-5'>Select players to compare</h3>
                    <div className='dropdown-area'>
                        <div className='select-wrapper'>
                            <div className='mx-auto col-4 mb-2'>Team A</div>
                            <select onChange={handleTeamASelect}>
                                <option>Select team</option>
                                {teams.map((items) => (
                                    <option value={items}>{items}</option>
                                ))}
                            </select>
                        </div>

                        <div className='select-wrapper'>
                            <div className='mx-auto col-4 mb-2'>Team B</div>
                            <select onChange={handleTeamBSelect}>
                                <option>Select team</option>
                                {teams.map((items) => (
                                    <option value={items}>{items}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='dropdown-area mt-5'>
                        <div>
                            <div className='col-4 mb-2'>Player 1</div>
                            <div className='select-wrapper'>
                                <select onChange={handlePlayerSelect}>
                                    <option>Select player</option>
                                    {teamsPlayers.map((items) => (
                                        <option value={items}>{items}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className='col-4 mb-2'>Player 2</div>
                            <div className='select-wrapper'>
                                <select onChange={handlePlayerBSelect}>
                                    <option>Select player</option>
                                    {teamsBPlayers.map((items) => (
                                        <option value={items}>{items}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button
                            className={
                                playerTwoArray[0]?.Name &&
                                playerOneArray[0]?.Name
                                    ? 'compare-active'
                                    : 'compare'
                            }
                            onClick={handleCompare}
                            disabled={!playerTwoArray[0]?.Name &&
                                !playerOneArray[0]?.Name}
                        >
                            Compare
                        </button>
                    </div>
                    <div>
                        <div className='score-area'>
                            <div className='score-area__wrapper'>
                                <div>
                                    <div className='score-area__wrapper__inner'>
                                        <div className='score-area__wrapper-text'>
                                            <ImageCard
                                                avatar={playerOneDetails.image}
                                                player={playerOneDetails.name}
                                                position={
                                                    playerOneDetails.position
                                                }
                                                number={
                                                    playerOneDetails.jerseyNo
                                                }
                                            />
                                        </div>

                                        <div className='score-area__wrapper-text'>
                                            <ImageCard
                                                avatar={playerTwoDetails.image}
                                                player={playerTwoDetails.name}
                                                position={
                                                    playerTwoDetails.position
                                                }
                                                number={
                                                    playerTwoDetails.jerseyNo
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className='comparison'>
                                        <div className='comparison__wrapper'>
                                            <h3 className='comparison__wrapper-text'>
                                                {' '}
                                                Comparison Stats{' '}
                                            </h3>

                                            <div className='comparison__score-area'>
                                                <div className='comparison__score-area-left'>
                                                    <div>
                                                        <ScoreArea
                                                            ballPossesion={
                                                                playerOneDetails.ballPossession
                                                            }
                                                            longPass={
                                                                playerOneDetails.longShot
                                                            }
                                                            shortPass={
                                                                playerOneDetails.truePasses
                                                            }
                                                            speed={playerOneDetails.speed.toFixed(
                                                                0
                                                            )}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='comparison__score-area-right'>
                                                    <ScoreArea
                                                        ballPossesion={
                                                            playerTwoDetails.ballPossession
                                                        }
                                                        longPass={
                                                            playerTwoDetails.longShot
                                                        }
                                                        shortPass={
                                                            playerTwoDetails.truePasses
                                                        }
                                                        speed={playerTwoDetails.speed.toFixed(
                                                            0
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                            <div className='comparison__score-area-stats'>
                                                {playerData.map(
                                                    (item, index) => (
                                                        <div
                                                            className='stats d-flex justify-content-between'
                                                            key={index}
                                                        >
                                                            <div>{item.a}</div>
                                                            <div>
                                                                {item.name}
                                                            </div>
                                                            <div>{item.b}</div>
                                                        </div>
                                                    )
                                                )}
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

export default withRouter(Comparison);
