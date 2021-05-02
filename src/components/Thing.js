import React, { Component } from "react";
import { Container } from "react-bootstrap";
import thing from "../Img/Appa.png";

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
