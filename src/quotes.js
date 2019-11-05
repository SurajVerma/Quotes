import React from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.scss";

class User extends React.Component {
  render() {
    const { picture, isLoading } = this.props;

    const userDetails = (
      // <div>
      //   <img
      //     className="img-thumbnail mx-auto mb-2 shadow-sm"
      //     src={picture}
      //     alt={picture}
      //     style={{ width: "500px"}}
      //   />        
      // </div>
      <div className="container-fluid">
        <div className="row">
          <div className="quotes-bg">
            <div className="quotes-overlay">
              <div className="quotes-base text-center">
                <p className="quote">You only live once, but if you do it right, once is enough.<span className="quote-by">Mae West</span></p>					
              </div>
              <div className="shuffle text-center">
                <i className="fa fa-random"></i>
              </div>
              <div className="info-btn">
                <i className="fa fa-info"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

    return (
      <div
        className="mx-auto mt-4 text-center p-5"
        style={{ maxWidth: "500px", minHeight: "250px" }}
      >
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
