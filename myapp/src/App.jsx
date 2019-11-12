import React, { Component } from "react";
import Form from "../src/app/components/Form";
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
