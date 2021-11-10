import "./index.scss";
import Modal from "../layouts/Modal";
import { withRouter } from "react-router-dom";


const CommingSoon = ({ isClose }) => {
  const stopPropagation = (e)=>{
    e.stopPropagation()
  }
  return (
    <Modal isClose={isClose}>
      <div className="soon col-lg-4 mx-auto" onClick={stopPropagation}>
        <h2 className="pt-4 text-center">
          <span>Coming</span> soon
        </h2>
        <div className="soon-right-text text-center">
          This feature will be ready soon.
        </div>
        <form>
          <button onClick={isClose} className="mx-auto">Close </button>
        </form>
      </div>
    </Modal>
  );
};

export default withRouter(CommingSoon);
