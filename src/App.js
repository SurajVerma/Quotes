// src/App.js
import React from "react";
import API from "./utils/API";
import User from "./quotes";

class App extends React.Component {
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
      params:{
        client_id: '7e844b2d98b1b97763a6ae53ad99b66a5dc338785e48e0f91e60e00c28d82102',
        orientation: 'landscape'
      }
    });
    picData = picData.data.urls.regular;
    //picData = picData.data[0].thumbnailUrl
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
    const { isLoading,  picture } = this.state;
    
    return (
      <div className="text-center">
        <User isLoading={isLoading} picture={picture} />      
        <button className="btn btn-success mt-5" onClick={this.getPicture}>Next User</button>
      </div>      
    );
  }


  // async componentDidMount() {
  //   let userData = await API.get('/', {
  //     params: {
  //       results: 1,
  //       inc: 'name, email, picture'
  //     }
  //   });
  //   userData = userData.data.results[0];
  //   console.log(userData);
  //   const name = `${userData.name.first} ${userData.name.last}`;
  //   const avatar = userData.picture.large;
  //   const email = userData.email;
  //   this.setState({
  //     ...this.state, ...{isLoading: false, name, avatar, email}
  //   })
    
  // }
  
}

export default App;