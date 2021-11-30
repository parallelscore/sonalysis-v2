import "./index.scss"
import {
  withRouter,
  Route,
  Switch,
} from 'react-router-dom';
import AllClub from "./AllClub"
import CreateClub from "./CreateClub"



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
    <div className="">
        <Switch>
          {/* <Route exact path={path}>
            <Redirect to={`${path}`} />
          </Route> */}
          <Route exact path={`${path}`}>
            <AllClub />
          </Route>
 
          <Route path={`${path}/create-club`}>
            <CreateClub/>
          </Route>

        </Switch>

      

    </div>

  );
};

export default withRouter(Analystic)