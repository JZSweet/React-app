import React, { Component } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Thingbox from "./components/Thingbox";


class App extends Component {
 
  render() {
    return <div>
      <Header />
      <Section />
      <Thingbox />
    </div>;
  };
};

export default App;
