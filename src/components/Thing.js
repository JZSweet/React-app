import React, { Component } from "react";

class Thing extends Component {
	render() {
	  return <div style={{marginLeft: this.props.left + 'px', marginTop: this.props.top + 'px'}}>Thing</div>;
  }
}

export default Thing;
