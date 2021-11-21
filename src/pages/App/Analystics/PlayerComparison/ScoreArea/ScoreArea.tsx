import './score-area.scss';

interface IScoreArea {
  title: string;
  stat: number;
  longPass: string;
  shortPass: string;
  speed: string;
}

const ScoreArea = ({ title, longPass, shortPass, speed, stat }: IScoreArea) => {
  return (
    <div className="scoreArea">
      <div className="scoreArea__inner">
        <div>
          <div className="scoreArea__textArea">
            <p> {title} </p>{' '}
            <p className="scoreArea__textArea-stat"> {stat}%</p>
          </div>
          <div className="scoreArea__textArea">
            <p> {longPass} </p>{' '}
            <p className="scoreArea__textArea-stat"> {stat}%</p>
          </div>
          <div className="scoreArea__textArea">
            <p> {shortPass} </p>{' '}
            <p className="scoreArea__textArea-stat"> {stat}%</p>
          </div>{' '}
          <div className="scoreArea__textArea">
            <p> {speed} </p>{' '}
            <p className="scoreArea__textArea-stat"> {stat}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreArea;
