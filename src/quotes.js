import React from "react";
import PropTypes from "prop-types";
import * as API from "./utils/API";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.scss";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class QuotesUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      picture: null
    };
  }

  getNew = async () => {
    this.state = {
      isLoading: true,
      picture: null
    };
    // let picData = await API.unsplash.get("/", {
    //   headers: { "Access-Control-Allow-Origin": "*" },
    //   params: {
    //     client_id: '7e844b2d98b1b97763a6ae53ad99b66a5dc338785e48e0f91e60e00c28d82102',
    //     orientation: 'landscape'
    //   }
    // });
    //picData = picData.data.urls.regular;
    //picData = picData.data[0].url
    let picData = await API.unsplash.get("/");
    let i = Math.floor(Math.random() * picData.data.length + 1);
    picData = picData.data[i].download_url;
   // console.log(picData);
    //const picture = picData;

    let quoteData = await API.quoteAPI.get("/", {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
    //quoteData = picData.data.urls.regular;
    //picData = picData.data[0].url
    let j = Math.floor(Math.random() * quoteData.data.length + 1);
    quoteData = quoteData.data[j];
    // console.log(quoteData.text);
    // console.log(quoteData.author);
    //const aaloo = quoteData;

    Promise.all([picData, quoteData])
      .then(requestData => {
        this.setState({
          isLoading: false,
          picture: picData,
          quotetext: quoteData.text,
          quoteauthor: quoteData.author
        })
      });

    // this.setState({
    //     ...this.state,
    //     ...{ isLoading: false, picture }
    //   });
  };
  // getQuotes = async () => {
  //   let quoteData = await API.quoteAPI.get("/");
  //   //quoteData = picData.data.urls.regular;
  //   //picData = picData.data[0].url
  //   let i = Math.floor(Math.random() * quoteData.data.length + 1);
  //   quoteData = quoteData.data[i];
  //   console.log(quoteData.text);
  //   console.log(quoteData.author);
  //   const aaloo = quoteData;
  // };

  componentDidMount() {
    this.getNew();
  }
  render() {
    const { picture, isLoading, quotetext, quoteauthor } = this.state;
    const quotesMeta = (
      <div className="quotes-bg" style={{ background: `url(${picture})` }}>
        <div className="quotes-overlay">
          <div className="quotes-base text-center">
            <p className="quote">
              {quotetext}
              <span className="quote-by">{quoteauthor}</span>
            </p>
          </div>
          <div className="shuffle text-center" onClick={this.getNew}>
            <FontAwesomeIcon icon={faRandom} />
          </div>
          {/* <div className="info-btn">
            <FontAwesomeIcon icon={faInfo} />
          </div> */}
        </div>
      </div>
    );

    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

    return (
      <div className="row">{isLoading ? loadingMessage : quotesMeta}</div>
    );
  }
}

QuotesUI.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  email: PropTypes.string,
  isLoading: PropTypes.bool
};

export default QuotesUI;
