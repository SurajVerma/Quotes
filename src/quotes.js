import React from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.scss";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class User extends React.Component {
  render() {
    const { picture, isLoading } = this.props;

    const userDetails = (                               
          <div className="quotes-bg" style={{background:`url(${picture})`}}>
            <div className="quotes-overlay">
              <div className="quotes-base text-center">
                <p className="quote">You only live once, but if you do it right, once is enough.<span className="quote-by">Mae West</span></p>					
              </div>
              <div className="shuffle text-center">
                <FontAwesomeIcon icon={faRandom} />
              </div>
              <div className="info-btn">
                <i className="fa fa-info"></i>
              </div>
            </div>          
        </div>      
    );

    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

    return (
      <div className="row">
        {isLoading ? loadingMessage : userDetails}
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  email: PropTypes.string,
  isLoading: PropTypes.bool
};

export default User;

//random