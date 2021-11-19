import "./index.scss";

import { withRouter } from "react-router-dom";
import { Link   } from "react-router-dom"

const CommingSoon = ({history}) => {
  
  return (
    
      <div className="soon-page  mx-auto" >
        <h2 className="pt-4 text-center">
          <span>Coming</span> soon
        </h2>
        <div className="soon-right-text text-center">
          This Page is coming soon.
        </div>
        <form>
          <Link to="/"><button  className="mx-auto">Back Home</button></Link>
        </form>
      </div>
    
  );
};

export default withRouter(CommingSoon);
