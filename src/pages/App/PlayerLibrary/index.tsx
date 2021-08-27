import "./index.scss"
import {
  withRouter,
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import {useEffect} from "react"
import AllClub from "./AllClub"
import CreateClub from "./CreateClub"

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
      uploadProgress && dispatch(updateUpload(uploadProgress));
    });
  }, []);

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