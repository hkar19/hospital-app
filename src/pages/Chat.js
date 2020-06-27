import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Image from "react-bootstrap/Image";

import video from "../assets/vidCall.jpg";
import Form from 'react-bootstrap/Form';


import { AiOutlineAudioMuted as Mute } from "react-icons/ai";
import { FiVideoOff as CameraOff } from "react-icons/fi";
import { RiCameraSwitchLine as CameraSwitch } from "react-icons/ri";
import { FcEndCall as EndCall } from "react-icons/fc";

function Chat(props) {
  const user= {
    name: props.user,
    // logo: props.user ? require(`../assets/avatar/${props.user}.svg`) : ""
  }
  
  const populateSOAP= (data)=>{
    let list = [];
    list.push(
      <Form as={Row} inline>
        <Form.Group as={Col} controlId="Subjective">
          <Form.Label className="h3">S</Form.Label>
          <Form.Control 
            
            as="textarea"
            style={{backgroundImage: `url(../assets/s.png)`}}
            placeholder="masukkan subjective"
            value={data.S}></Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="Objective">
          <Form.Label className="h3">O</Form.Label>
          <Form.Control 
            as="textarea"
            placeholder="masukkan Objective"
            value={data.O}></Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="Analysis">
          <Form.Label className="h3">A</Form.Label>
          <Form.Control
            as="textarea" 
            placeholder="masukkan Analysis"
            value={data.A}></Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="Planning">
          <Form.Label className="h3">P</Form.Label>
          <Form.Control 
            as="textarea"
            placeholder="masukkan Planning"
            value={data.P}></Form.Control>
        </Form.Group>
        <Row>
          <ButtonGroup>
            <Button variant="success" as={Col} className="ml-3">Check patient history</Button>
            <Button variant="success" as={Col} className="ml-3">Submit SOAP</Button>
          </ButtonGroup>
        </Row>
      </Form>
    )

    return list;
  }
  
  return (
    <Jumbotron>
      <Container>
        <Row>
          {user.name === "dokter" ? (
              <Col xs={6} sm={5} md={4} lg={3}>
                {populateSOAP(SOAPDummy)}
              </Col>
          ): []}
          {/* <Col 
            style={
              {
                backgroundImage: `url(${video})`,
                backgroundSize: "contain",
                backgroundRepeat:"no-repeat",
                backgroundPosition:"center"}}>
            <Row className="ml-1 mr-1 absolute-bottom" style={{position}}>
              <ButtonGroup className="">
                <Button as={Col} className="ml-1 mr-1">
                  <Mute className="h4"/>
                </Button>
                <Button as={Col} className="ml-1 mr-1">
                  <CameraOff className="h4"/>
                </Button>
                <Button as={Col} className="ml-1 mr-1">
                  <CameraSwitch className="h4"/>
                </Button>
                <Button as={Col} roundedCirle className="ml-1 mr-1">
                  <EndCall className="h4"/>
                </Button>
              </ButtonGroup>
            </Row>
          </Col> */}
            <Card as={Col}>
              <Card.Img
                alt=""
                src={video}
                height="500"
              >
              </Card.Img>
              <Card.ImgOverlay>
                <Card.Header className="h2">{user.name === "dokter"? "Renata Daulay":"Poli Umum-dr. Wirawan"}</Card.Header>
                
                
              </Card.ImgOverlay>
              <Card.Footer className="align-items-end">
                <Row className="ml-1 mr-1 justify-content-around">
                  <ButtonGroup className="">
                    <Button variant="success" as={Col} className="ml-1 mr-1">
                      <Mute className="h4"/>
                    </Button>
                    <Button variant="success" as={Col} className="ml-1 mr-1">
                      <CameraOff className="h4"/>
                    </Button>
                    <Button variant="success" as={Col} className="ml-1 mr-1">
                      <CameraSwitch className="h4"/>
                    </Button>
                    <Button variant="success" as={Col} className="ml-1 mr-1">
                      <EndCall className="h4"/>
                    </Button>
                  </ButtonGroup>
                </Row>
              </Card.Footer>
            </Card>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Chat;

const SOAPDummy = {
  S: "Pasien mengeluhkan sakit perut",
  O: "td 120/80 mmHg, hr 80x/i, T 37.5C, rr:20x/i",
  A: "Dyspepsia",
  P: "Omeprazole 20mg 3x1"
}
