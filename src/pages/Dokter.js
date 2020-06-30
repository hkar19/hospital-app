import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Calendar from "react-calendar";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link, BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import Chat from "./Chat";
import CardDeck from 'react-bootstrap/CardDeck';

import 'react-calendar/dist/Calendar.css';

function Dokter() {
  let match = useRouteMatch();

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
              <ListGroup.Item>
                <Button variant="outline-success">
                  <Link to={`${match.url}/chat`}>Panggil</Link>
                </Button>
              </ListGroup.Item>
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
          <Col>
              <Calendar className="mx-3 mb-2"/>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                Janji dengan pasien
              </Card.Header>
              <Card.Body>
                <Accordion>
                  {populateJanji(janjiDummy)}
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card as={Row} className="mb-2">
          <Card.Header>
            Grafik
          </Card.Header>
          <Card.Body>
            Data
          </Card.Body>
        </Card>
        <Card as={Row}>
          <Card.Header>
            Hasil pencarian pasien
          </Card.Header>
          <Card.Body>
            Data
          </Card.Body>
        </Card>
        
        
      </Container>
    </Jumbotron>
  )
}

export default Dokter;

const janjiDummy = [
  {
    pasien: "Renata Daulay",
    keluhan: "Diare",
    date: "24 juni 2021"
  },
  {
    pasien: "Ryan Agatha",
    keluhan: "Cekot-cekot",
    date: "24 juni 2021"
  }
]


