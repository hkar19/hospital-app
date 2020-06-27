import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";

import video from "../assets/videoDummy.png";

function Chat(props) {
  const user= {
    name: props.user,
    // logo: props.user ? require(`../assets/avatar/${props.user}.svg`) : ""
  }
  
  const populateSOAP= ()=>{
    let list = [];
    list.push(
      <>
        <Card as={Row} body>S</Card>
        <Card as={Row} body>O</Card>
        <Card as={Row} body>A</Card>
        <Card as={Row} body>P</Card>
        <Button as={Row}>Check patient history</Button>
      </>
    )

    return list;
  }
  
  return (
    <Jumbotron>
      <Container>
        <Row>
          {user.name === "dokter" ? (

              <Card as={Col}>
                {populateSOAP()}
              </Card>

          ): []}
            <Card as={Col} body>
              <Card as={Row}>
                <Image
                  alt=""
                  src={video}
                  width="400"
                  height="400"
                >
                </Image>
              </Card>
              <Card as={Row}>
                Video Setting
              </Card>
            </Card>
            {/* <Card as={Row} body>
              Video Control
            </Card> */}
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Chat;
