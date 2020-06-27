import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";

import video from "../assets/videoDummy.png";
import Form from 'react-bootstrap/Form';

import { FaBeer } from "react-icons/fa";
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
      <Form >
        <Form.Group controlId="Subjective">
          <Form.Label className="h3">Subjective</Form.Label>
          <Form.Control 
            as="textarea"
            placeholder="masukkan subjective"
            value={data.S}></Form.Control>
        </Form.Group>
        <Form.Group controlId="Objective">
          <Form.Label className="h3">Objective</Form.Label>
          <Form.Control 
            as="textarea"
            placeholder="masukkan Objective"
            value={data.O}></Form.Control>
        </Form.Group>
        <Form.Group controlId="Analysis">
          <Form.Label className="h3">Analysis</Form.Label>
          <Form.Control
            as="textarea" 
            placeholder="masukkan Analysis"
            value={data.A}></Form.Control>
        </Form.Group>
        <Form.Group controlId="Planning">
          <Form.Label className="h3">Planning</Form.Label>
          <Form.Control 
            as="textarea"
            placeholder="masukkan Planning"
            value={data.P}></Form.Control>
        </Form.Group>
        <Row>
          <Button as={Col} className="ml-3">Check patient history</Button>
          <Button as={Col} className="ml-3 btn-success">Submit SOAP</Button>
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
            <Card as={Col}>
              <Card.Header className="h2">{user.name === "dokter"? "Ivan Gautama":"Poli Umum-dr. Wirawan"}</Card.Header>
              <Card.Img
                alt=""
                src={video}
                width="400"
                height="400"
              >
              </Card.Img>
              <Card.Footer>
                <Row className="ml-1 mr-1">
                  <Button as={Col} className="ml-1 mr-1"><Mute className="h4"/><br/> Mute</Button>
                  <Button as={Col} className="ml-1 mr-1"><CameraOff className="h4"/><br/> Turn off Camera</Button>
                  <Button as={Col} className="ml-1 mr-1"><CameraSwitch className="h4"/><br/> Switch Camera</Button>
                  <Button as={Col} className="ml-1 mr-1"><EndCall className="h4"/><br/> End Call</Button>
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
