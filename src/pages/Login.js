import React, { useState } from 'react';

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


const Login = (props)=>{
  const [user,setUser]= useState("");
  const [password,setPassword] = useState("");

  // const history = useHistory();


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
    console.log("ye?")
    e.preventDefault();
    console.log(user,password);
    props.userSubmitHandler(user);
    setUser("");
    setPassword("");
  }

  return(
  <Container>
    <Jumbotron style={{flexDirection:"column",justifyContent:"center",textAlign:"center"}}>
      <Image
        alt=""
        src={logo}
      ></Image>
      <p style={{fontSize:"xx-large"}}>RS Tjahaja Hati</p>
      <p style={{fontSize:"small"}}>powered by Sinapsis</p>
      <Form onSubmit={handleSubmit} inline style={{flexDirection:"column"}}>
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
    </Jumbotron>
  </Container>

    // <Jumbotron>
    //   <Container className="justify-content-md-center">
    //   <Row className="align-items-center mb-2">
    //         <Col xl={12} className="text-center">
    //         <Image
    //           alt=""
    //           src={logo}
    //           height="20%"
    //           width="20%"
    //         ></Image>
    //         </Col>
    //         <Col className="text-center">
    //           <h2>RS Tjahaja Hati</h2>
    //           <small>powered by Sinapsis</small>
    //         </Col>
    //       </Row>
    //     <Form onSubmit={handleSubmit}>
    //       <Form.Group as={Row} controlId="user">
    //         <Form.Label column sm={2}>User</Form.Label>
    //         <Col sm={10}>
    //           <FormControl 
    //             type="text" 
    //             placeholder="user anda"
    //             value={user}
    //             onChange={userChangeHandler}  
    //           ></FormControl>
    //         </Col>
    //       </Form.Group>
    //       <Form.Group as={Row} controlId="password">
    //         <Form.Label column sm={2}>Password</Form.Label>
    //         <Col sm={10}>
    //           <FormControl 
    //             type="password" 
    //             placeholder="masukkan password anda"
    //             value={password}
    //             onChange={passwordChangeHandler}></FormControl>
    //         </Col>

    //       </Form.Group>
    //       <Button type="submit">Login</Button>
    //     </Form>
    //   </Container>
    // </Jumbotron>
  );
}

export default Login
