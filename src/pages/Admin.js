import React, {useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function Admin() {
  let list = [];
  list.push(
    <div>je</div>
  );

  const populateQuickView= (data)=>{

    return data.map((val,i)=>(
      <Col key={i}>
        <Card>
          <Card.Body>
            {val.data}
          </Card.Body>
        </Card>
      </Col>
    ));
  }

  return(
    <Jumbotron>
      <Container >
        <Row className="show-grid"> {/* biggest row */}
          <Col>
            <Card as={Row}>
              INCOME
            </Card>
            <Row  xs={4} md={4} lg={4}>
              {populateQuickView(quickDataDummy)}
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Card body>
                  Jumlah pasien terdaftar
                </Card>
              </Col>
              <Col>
                <Card body>
                  Jumlah dokter terdaftar
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default Admin;

const quickDataDummy = [
  {
    data: "Rata-rata $$$ per dokter per bulan"
  },
  {
    data: "Pendapatan $$$ dari Jasa Konsultasi"
  },
  {
    data: "Pendapatan $$$ dari penjualan Obat"
  },
  {
    data: "Rata-rata durasi konsultasi pasien"
  },
  {
    data: "Rata-rata jumlah konsultasi per dokter per bulan"
  },
  {
    data: "Perubahan $$$ dibanding bulan lalu"
  },
  {
    data: "Rasio konsultasi berulang pasien"
  },
  {
    data: "Rasio dokter aktif : pasien"
  },
  {
    data: "Kepuasan pasien"
  }
]
