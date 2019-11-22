import React from "react";
import PropTypes from "prop-types";
import API from "./utils/API";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.scss";
import { faRandom, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      picture: null,
    };
  }

  getPicture = async () =>{    
    let picData = await API.get('/', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      // params:{
      //   client_id: '7e844b2d98b1b97763a6ae53ad99b66a5dc338785e48e0f91e60e00c28d82102',
      //   orientation: 'landscape'
      // }
    });
    //picData = picData.data.urls.regular;
    //picData = picData.data[0].url
    picData = picData.data[0].download_url
    console.log(picData);    
    const picture = picData;    
    this.setState({
      ...this.state, ...{isLoading: false, picture}
    })
  }
  componentDidMount(){
    this.getPicture();
  }
  render() {
    const { picture, isLoading } = this.state;

    const userDetails = (                               
          <div className="quotes-bg" style={{background:`url(${picture})`}}>
            <div className="quotes-overlay">
              <div className="quotes-base text-center">
                <p className="quote">You only live once, but if you do it right, once is enough.<span className="quote-by">Mae West</span></p>					
              </div>
              <div className="shuffle text-center" onClick={this.getPicture}>
                <FontAwesomeIcon icon={faRandom} />
              </div>
              <div className="info-btn">
                <FontAwesomeIcon icon={faInfo} />
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
