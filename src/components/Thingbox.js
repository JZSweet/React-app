import React, { Component } from "react";
import { Container } from "react-bootstrap";
import back from "../Img/back.png";
import Thing from "./Thing";

const backgroud = {
    backgroundImage: `url(${back})`
};

class Thingbox extends Component {

    
    render() {
        return (
            <Container style={backgroud}>
                <Thing/>
            </Container>
        );
    };
};

export default Thingbox;       