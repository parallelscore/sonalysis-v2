import "./index.scss"
import {
  withRouter,
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import {useEffect} from "react"
import Home from "./Home"
import AllUploadVideo from "./AllUploadVideo"
import AnalyzedMatch from "./AnalyzedMatch"
import PlayerDetail from "./PlayerDetail"
import { io } from "socket.io-client";
import {baseURL} from "../../../api/request";
import {updateUpload} from "../../../store/upload/actions"
import {useDispatch} from "react-redux"
import MatchStats from "./MatchStats"
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

  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io(`${baseURL}`);

    socket.on("analyzed video", (uploadProgress) => {
      uploadProgress && dispatch(updateUpload(uploadProgress));
    });
  }, []);

  return (
    <div className="">
     
        <Switch>
          <Route exact path={path}>
            <Redirect to={`${path}/home`} />
          </Route>
          <Route exact path={`${path}/home`}>
            <Home/>
          </Route>
          <Route exact path={`${path}/all-video`}>
            <AllUploadVideo />
           
          </Route>
          <Route path={`${path}/stats/:id`}>
            <MatchStats/>
          </Route>
          <Route path={`${path}/match/:id`}>
            <AnalyzedMatch/>
          </Route>
          <Route path={`${path}/player/:id`}>
            <PlayerDetail/>
          </Route>
         
        
        </Switch>

      

    </div>

  );
};

export default withRouter(Analystic)