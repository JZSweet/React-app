import React, { Component } from "react";
import { Container } from "react-bootstrap";
import back from "../Img/back.png";
import Thing from "./Thing";
import Controls from "./Controls";

const backgroud = {
    backgroundImage: `url(${back})`
};

class Thingbox extends Component {
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
        return (
            <Container style={backgroud}>
                <Thing left={this.state.left} top={this.state.top} />
                <Controls move={(x, y) => this.move(x, y)} />
            </Container>
        );
    };
};

export default Thingbox;