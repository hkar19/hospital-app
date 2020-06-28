import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from "react-bootstrap/Image";

import video from "../assets/vidCall.jpg";
import sImage from "../assets/SOAP/s.png";
import oImage from "../assets/SOAP/o.png";
import aImage from "../assets/SOAP/a.png";
import pImage from "../assets/SOAP/p.png";

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
    return (
      <Form>
        <Card className="mt-3 mb-3"> 
          <Row className="no-gutters">
            <Col md={4}>
              <Image
                src={sImage}
                width="100%"
                className="mx-auto"
              >
              </Image>
            </Col>
            <Col md={8}>
                <Form.Control
                  as="textarea"
                  value={data.S}
                  rows={4}
                >
                </Form.Control>
            </Col>
          </Row>
        </Card>
        <Card className="mb-3"> 
          <Row className="no-gutters">
            <Col md={4}>
              <Image
                src={oImage}
                width="100%"
                className="mx-auto"
              >
              </Image>
            </Col>
            <Col md={8}>
                <Form.Control
                  as="textarea"
                  value={data.O}
                  rows={4}
                >
                </Form.Control>
            </Col>
          </Row>
        </Card>
        <Card className="mb-3"> 
          <Row className="no-gutters">
            <Col md={4}>
              <Image
                src={aImage}
                width="100%"
                className="mx-auto"
              >
              </Image>
            </Col>
            <Col md={8}>
                <Form.Control
                  as="textarea"
                  value={data.A}
                  rows={4}
                >
                </Form.Control>
            </Col>
          </Row>
        </Card>
        <Card className="mb-3"> 
          <Row className="no-gutters">
            <Col md={4}>
              <Image
                src={pImage}
                width="100%"
                className="mx-auto"
              >
              </Image>
            </Col>
            <Col md={8}>
                <Form.Control
                  as="textarea"
                  value={data.P}
                  rows={4}
                >
                </Form.Control>
            </Col>
          </Row>
        </Card>
       <Card.Footer>
         <ButtonGroup >
           <Button variant="success" as={Col} className="mr-1 ml-1">Check patient history</Button>
           <Button variant="success" as={Col} className="mr-1 ml-1">Submit SOAP</Button>
         </ButtonGroup>
        </Card.Footer>
      </Form>
    );
  }
  
  return (
    <Jumbotron>
      <Container>
        <Row>
          {user.name === "dokter" ? (
              <Card as={Col} xs={6} sm={5} md={4} lg={3}>
                {populateSOAP(SOAPDummy)}
              </Card>
          ): []}
            <Card as={Col}>
              
              <Card.Header as={Row}  className="h2">
                <Col lg={8}>
                  {user.name === "dokter"? ("Renata Daulay"):("dr. Joanna Vanderboom")}
                </Col>
                <Col className="text-right">
                <small>(12:35)</small>
                </Col>
                
              </Card.Header>
              <Card.Body>
                <Card.Img
                  alt=""
                  src={video}
                  height="500"
                >
                </Card.Img>
              </Card.Body>
              <Card.Footer as={Row} className="justify-content-around">
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
