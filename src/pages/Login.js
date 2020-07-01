import React, { useState, useEffect } from 'react';

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from "react-bootstrap/Image";
// // import Card from "react-bootstrap/Card";

import logo from "../assets/hosp/res/mipmap-xxxhdpi/hosp.png";
// src\assets\hosp\res\mipmap-xxxhdpi\hosp.png
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom';

// import "./sinapsis-login.css"


const Login = (props)=>{
  const [user,setUser]= useState("");
  const [password,setPassword] = useState("");

  // const history = useHistory();

  useEffect(() => {
    document.title= `RS Tjahaja Hati WebApp`;
  }, []);


  const userChangeHandler = (e)=>{
    e.preventDefault();
    setUser(e.target.value);
    // console.log(e.target.value)
    
  }
  const passwordChangeHandler = (e)=>{
    e.preventDefault();
    setPassword(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    props.userSubmitHandler(user);
    setUser("");
    setPassword("");
  }

  return(
    // <Container
    // style={{
    //   backgroundImage:`url(${require("../assets/doctor_background.jpg")})`,
    //   backgroundRepeat:"no-repeat",
    //   backgroundSize:"contain"
    // }}
    // >
    //   <Jumbotron>

    //   </Jumbotron>
    // </Container>

  <Container
      style={{
      backgroundImage:`url(${require("../assets/doctor_background.jpg")})`,
      backgroundRepeat:"no-repeat",
      // backgroundSize:"contain"
    }}
  >
    <Row>
      <Col 
        md={"auto"}
        style={{
          flexDirection:"column",
          justifyContent:"center",
          textAlign:"center",
          marginLeft:"auto",
          padding:"1%"
          }}>
        <Image
          alt=""
          src={logo}
        ></Image>
        <p style={{fontSize:"xx-large"}}>RS Tjahaja Hati</p>

        <Form onSubmit={handleSubmit} inline style={{flexDirection:"column",justifyContent:"center"}}>
          <Form.Group style={{justifyContent:"space-between"}}>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username anda"
              value={user}
              onChange={userChangeHandler}
            ></Form.Control>
          </Form.Group>
          <Form.Group style={{justifyContent:"space-between"}}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password anda"
              value={password}
              onChange={passwordChangeHandler}
            ></Form.Control>
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
        <p style={{fontSize:"small"}}>powered by Sinapsis</p>
      </Col>
    </Row>

  </Container>

  );
}

export default Login
