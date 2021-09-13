import "./index.scss"
import {useEffect} from "react"
import Analytics from "../Analystics/AllUploadVideo";
import { io } from "socket.io-client";
import {baseURL} from "../../../api/request";
import {updateUpload} from "../../../store/upload/actions"
import {useDispatch} from "react-redux"

const Dashbaord = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io(`${baseURL}`);

    socket.on("analyzed video", (uploadProgress) => {
      uploadProgress && dispatch(updateUpload(uploadProgress));
    });
  }, []);

  return (
    <div className="text-center">
      Dashbaord
      <Analytics />
    </div>

  );
};

export default Dashbaord