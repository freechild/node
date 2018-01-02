import React, { Component } from "react";
import App from "../presentational/test/base";

class FormContainer extends Component {

  state ={
    CountOfButtons : 6,
    views : 5,
  }
  render(){

    return(
      <App
        CountOfButtons={this.state.CountOfButtons}
        views={this.state.views}
      />
    );
  }
}


export default FormContainer;
