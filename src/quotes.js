import React from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.scss";

class User extends React.Component {
  render() {
    const { picture, isLoading } = this.props;

    const userDetails = (
      <div>
        <img
          className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
          src={picture}
          alt={picture}
          style={{ width: "100px", height: "100px" }}
        />        
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
