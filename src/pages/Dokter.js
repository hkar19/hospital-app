import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Calendar from "react-calendar";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

function Dokter() {

  const populateJanji = (janji)=>{
    return janji.map((val,i)=>(
      <Card key={i}>
        <Accordion.Toggle as={Card.Header} eventKey={i}>
          {val.pasien}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i}>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>Nama :   {val.pasien}</ListGroup.Item>
              <ListGroup.Item>Keluhan: {val.keluhan}</ListGroup.Item>
              <ListGroup.Item>Tanggal: {val.date}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ));
  }

  return (
    <Jumbotron>
      <Container>
        <Row>
          <Card as={Col}>
            <Calendar/>
          </Card>
          <Card as={Col}>
            <Card.Header>
              Janji dengan pasien
            </Card.Header>
            <Card.Body>
              <Accordion>
                {populateJanji(janjiDummy)}
              </Accordion>
            </Card.Body>
          </Card>
        </Row>
        <Card as={Row}>
          <Card.Header>
            Grafik
          </Card.Header>
        </Card>
        <Card as={Row}>
          <Card.Header>
            Hasil Pencarian Dokter
          </Card.Header>
        </Card>
        
      </Container>
    </Jumbotron>
  )
}

export default Dokter;

const janjiDummy = [
  {
    pasien: "Ivan Gautama",
    keluhan: "Diare",
    date: "24 juni 2021"
  },
  {
    pasien: "Ryan Agatha",
    keluhan: "Cekot-cekot",
    date: "24 juni 2021"
  }
]
