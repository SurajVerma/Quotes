// src/App.js
import React from "react";
//import API from "./utils/API";
import User from "./quotes";

class App extends React.Component {
    render() {    
    
    return (
      <div className="container-fluid">
        <User/>      
        {/* <button className="btn btn-success mt-5" onClick={this.getPicture}>Next User</button> */}
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