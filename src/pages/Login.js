import React, { useState } from 'react';

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from "react-bootstrap/Image";

import logo from "../hospital.png";


const Login = (props)=>{
  const [user,setUser]= useState("");
  const [password,setPassword] = useState("");


  const userChangeHandler = (e)=>{
    e.preventDefault();
    setUser(e.target.value);
    
  }
  const passwordChangeHandler = (e)=>{
    e.preventDefault();
    setPassword(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user,password);
    setUser("");
    setPassword("");
  }

  return props.user ? [] : (
    <Jumbotron>
      <Form onSubmit={handleSubmit}>
        <Image
          alt=""
          src={logo}
          height="50"
          width="50"
        ></Image>
        <h2>RS Tjahaja Hati</h2>
        <small>powered by Sinapsis</small>
        <Form.Group as={Row} controlId="user">
          <Form.Label column sm={2}>User</Form.Label>
          <Col sm={10}>
            <FormControl 
              type="text" 
              placeholder="user anda"
              value={user}
              onChange={userChangeHandler}  
            ></FormControl>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="password">
          <Form.Label column sm={2}>Password</Form.Label>
          <Col sm={10}>
            <FormControl 
              type="password" 
              placeholder="masukkan password anda"
              value={password}
              onChange={passwordChangeHandler}></FormControl>
          </Col>

        </Form.Group>
        <Button type="submit" >Login</Button>
      </Form>
    </Jumbotron>
    
  );
}

export default Login
