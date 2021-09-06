
import "./index.scss"
import {
  withRouter,
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import DashboardLayout from "../../component/layouts/DashboardLayout"
import Analytics from "./Analystics"
import Dashboard from "./Dashboard"
import Recruitment from "./Recruitment"
import Hightlight from "./Highlight/index"
import Actions from "./Highlight/hight"

import PlayerLibrary from "./PlayerLibrary"

export interface CardProps {
  number?: number;
  desc?: string;
  image?: string;
  charts?: any;
}

const App = (props) => {
  const {
    match: { path },
  } = props;

  return (
    <div className="">
      <DashboardLayout>
        <Switch>
          <Route exact path={path}>
            <Redirect to={`${path}/dashboard`} />
          </Route>
          <Route path={`${path}/dashboard`}>
            <Dashboard/>
          </Route>
          <Route path={`${path}/analytics`}>
            <Analytics />
           
          </Route>
          <Route exact path={`${path}/recruitment`}>
            <Recruitment />
          </Route>
          <Route exact path={`${path}/highlight-reels`}>
            <Hightlight />
          </Route>
          <Route  path={`${path}/highlight-reels/actions/:id`}>
            <Actions />
          </Route>
          <Route  path={`${path}/player-library`}>
            <PlayerLibrary />
          </Route>
        </Switch>

      </DashboardLayout>

    </div>

  );
};

export default withRouter(App)