import React, { Component } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Thing from "./components/Thing";
import Controls from "./components/Controls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      left: 0,
      top: 0,
    }
  };

  move(x, y) {
    this.setState({
      left: this.state.left + x,
      top: this.state.top + y
    });
  };

  render() {
    return <div>
      <Header />
      <Section />
      <Thing left={this.state.left} top={this.state.top} />
      <Controls move={(x, y) => this.move(x, y)} />
    </div>;
  };
};

export default App;
