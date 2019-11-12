import React, { Component } from "react";
import Navbar from "./app/components/Navbar";
import Routes from "./Routes";
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes />
      </>
    );
  }
}

export default App;
