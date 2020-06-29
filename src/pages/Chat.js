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
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

import video from "../assets/Coding Train Late Night 1.mp4";
import sImage from "../assets/SOAP/s.png";
import oImage from "../assets/SOAP/o.png";
import aImage from "../assets/SOAP/a.png";
import pImage from "../assets/SOAP/p.png";

import Form from 'react-bootstrap/Form';


import { 
  AiOutlineAudioMuted as Mute, 
  AiOutlineSave as Save,
  AiOutlineHistory as History } from "react-icons/ai";
import { FiVideoOff as CameraOff } from "react-icons/fi";
import { RiCameraSwitchLine as CameraSwitch } from "react-icons/ri";
import { FcEndCall as EndCall } from "react-icons/fc";
// import { GrSave as Save } from "react-icons/gr";

function Chat(props) {
  const user= {
    name: props.user,
    // logo: props.user ? require(`../assets/avatar/${props.user}.svg`) : ""
  }

  const populateSOAP= (data)=>{
    return (
      <Form >
          <Card className="mb-3"> 
            <Row className="no-gutters" style={{background:`${sImage}`}}>
              <Col >
                <Form.Control as="textarea" rows={4} 
                  style={{
                    backgroundImage:`url(${sImage})`,
                    backgroundRepeat:"no-repeat"
                    }}
                  value={data.S}
                  onChange={()=>{return}}
                >
                </Form.Control>
              </Col>
            </Row>
          </Card>
          <Card className="mb-3"> 
            <Row className="no-gutters">
              <Col >
                <Form.Control as="textarea" rows={4} 
                  style={{
                    backgroundImage:`url(${oImage})`,
                    backgroundRepeat:"no-repeat"
                    }}
                  value={data.O}
                  onChange={()=>{return}}
                >
                </Form.Control>
              </Col>
            </Row>
          </Card>
          <Card className="mb-3"> 
            <Row className="no-gutters">
              <Col >
                <Form.Control as="textarea" rows={4} 
                  style={{
                    backgroundImage:`url(${aImage})`,
                    backgroundRepeat:"no-repeat"
                    }}
                  value={data.A}
                  onChange={()=>{return}}
                >
                </Form.Control>
              </Col>
            </Row>
          </Card>
          <Card className="mb-3"> 
            <Row className="no-gutters">
              <Col >
                <Form.Control as="textarea" rows={4} 
                  style={{
                    backgroundImage:`url(${pImage})`,
                    backgroundRepeat:"no-repeat"
                    }}
                  value={data.P}
                  onChange={()=>{return}}
                >
                </Form.Control>
              </Col>
            </Row>
          </Card>
          <Row className="justify-content-around" style={{position:"aboslute",bottom:"0"}}>
            <Button variant="success" as={Col} className="ml-1 mr-1"><History className="h4"/></Button>
            <Button variant="success" as={Col} className="ml-1 mr-1"><Save className="h4"/></Button>
          </Row>
      </Form>
    );
  }
  
  return (
      <Container>
        <Jumbotron className="px-5 py-2">
        <Row>
          {user.name === "dokter" ? (
            <Col sm={4} md={3} lg={3} >
              <Container className="h-100">
              {populateSOAP(SOAPDummy)}
              </Container>
            
            </Col>   
          ): []}
            <Card as={Col}>
              
              <Card.Header as={Row}  className="h2">
                <Col lg={8}>
                  {user.name === "dokter"? ("Renata Daulay"):("dr. Joanna Vanderboom")}
                </Col>
                <Col className="text-right">
                  (12:35)
                </Col>
                
              </Card.Header>
              <Card.Body>
                <div style={{ }}>
                  <ResponsiveEmbed aspectRatio="16by9">
                      <embed src={video}></embed>
                      
                  </ResponsiveEmbed>
                </div>
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
        </Jumbotron>
 
      </Container>
  )
}

export default Chat;

const SOAPDummy = {
  S: "Pasien mengeluhkan sakit perut",
  O: "td 120/80 mmHg, hr 80x/i, T 37.5C, rr:20x/i",
  A: "Dyspepsia",
  P: "Omeprazole 20mg 3x1"
}
