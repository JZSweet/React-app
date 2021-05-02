import React, { Component } from "react";
import thing from "../Img/Appa.png";
import { Container } from "react-bootstrap";

class Thing extends Component {
  render() {
    return (
     <Container>
    <div style={{ marginLeft: this.props.left + 'px', marginTop: this.props.top + 'px' }}>
      <img
        className="d-block w-100"
        src={thing}
        alt="move"
      />
    </div>
    </Container>
    )
  }
}

export default Thing;
