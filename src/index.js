import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

class QuotesBG extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photo: "https://via.placeholder.com/600/92c952" };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=7e844b2d98b1b97763a6ae53ad99b66a5dc338785e48e0f91e60e00c28d82102&orientation=landscape`
        //`https://jsonplaceholder.typicode.com/photos`
      )
      .then(res => {
        const photos = res.data.urls.regular;
        this.setState({ photo: photos });
      });
  }
  render() {
    return <img src={this.state.photo} alt={this.state.photo} />;
  }
}

ReactDOM.render(<QuotesBG />, document.getElementById("root"));
