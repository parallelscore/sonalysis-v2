import './index.scss';
import {
    withRouter,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Home from './Home';
import AllUploadVideo from './AllUploadVideo';
import AnalyzedMatch from './AnalyzedMatch';
import PlayerDetail from './PlayerDetail';
import MatchStats from './MatchStats';
export interface CardProps {
    number?: number;
    desc?: string;
    image?: string;
    charts?: any;
}

const Analystic = (props) => {
    const {
        match: { path },
    } = props;

    return (
        <div className=''>
            <Switch>
                <Route exact path={path}>
                    <Redirect to={`${path}/home`} />
                </Route>
                <Route exact path={`${path}/home`}>
                    <Home />
                </Route>
                <Route exact path={`${path}/all-video`}>
                    <AllUploadVideo />
                </Route>
                <Route path={`${path}/stats/:id`}>
                    <MatchStats />
                </Route>
                <Route path={`${path}/match/:id`}>
                    <AnalyzedMatch />
                </Route>
                <Route path={`${path}/player/:id`}>
                    <PlayerDetail />
                </Route>
            </Switch>
        </div>
    );
};

export default withRouter(Analystic);
