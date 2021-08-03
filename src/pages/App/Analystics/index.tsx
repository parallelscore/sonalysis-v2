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
import { io } from "socket.io-client";
import {baseURL} from "../../../api/request";
import {updateUpload} from "../../../store/upload/actions"
import {useDispatch} from "react-redux"
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
      console.log({uploadProgress});
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
          <Route path={`${path}/all-video`}>
            <AllUploadVideo />
           
          </Route>
          <Route path={`${path}/match`}>
            <AnalyzedMatch/>
           
          </Route>
         
        
        </Switch>

      

    </div>

  );
};

export default withRouter(Analystic)