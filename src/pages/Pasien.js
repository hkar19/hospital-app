// import React from 'react';
import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

function Pasien(props) {
  // const [state, setstate] = useState("");
  
  const populateJanji = (janji)=>{
    return janji.map((val,i)=>(
      <Card key={i}>
        <Accordion.Toggle as={Card.Header} eventKey={i}>
          {`${val.poli}-${val.dokter}`}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i}>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>{val.dokter}</ListGroup.Item>
              <ListGroup.Item>{val.poli}</ListGroup.Item>
              <ListGroup.Item>{val.date}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ));
  }
  
  return (
    <Jumbotron>
      <Card>
        <Card.Header>
          Janji dengan Dokter
        </Card.Header>
        <Card.Body>
          <Accordion>
            {populateJanji(janjiDummy)}
          </Accordion>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          Hasil Pencarian Dokter
        </Card.Header>
      </Card>
    </Jumbotron>
  )
}

export default Pasien;

const janjiDummy = [
  {
    dokter: "drg. Bethany",
    poli: "Poli Gigi",
    date: "21 Juni 2021"
  },
  {
    dokter: "dr. Wirawan",
    poli: "Poli Umum",
    date: "23 Juni 2021"
  }
];

