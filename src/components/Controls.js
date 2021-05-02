import React, { Component } from "react";

class Controls extends Component {
	render() {
	  return <div>
      <button onClick={e => this.props.move(-10, 0)}>Left</button>
      <button onClick={e => this.props.move(10, 0)}>Right</button>
      <button onClick={e => this.props.move(0, -10)}>Up</button>
      <button onClick={e => this.props.move(0, 10)}>Down</button>
    </div>;
  }
};

export default Controls;