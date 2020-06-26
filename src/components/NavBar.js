import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import logo from "../hospital.png";

function NavBar(props) {
  const user= {
    name: "admin",
    logo: require("../assets/avatar/admin.svg")
  }
  
  // require("../assets/avatar/pasien.svg");
  // // const logoFinder = ()

  const populateNav = (user)=>{
    const list = [];
    if(user.name != "admin"){
      list.push(
        <Form inline className="mr-auto">
          <FormControl 
            type="text" 
            placeholder={`cari ${user.name == "pasien" ? "dokter":"pasien"}`}
            className="mr-sm-2"
          ></FormControl>
          <Button variant="outline-success">Cari</Button>
        </Form>
      )
    }
    return list.length ? list: (<Nav className="mr-auto"></Nav>);
  }

  const populateAva = (user)=>{
    const list = [];
    const isAdmin = user.name === "admin";
    if(!isAdmin){
      list.push(
        <>
        <NavDropdown.Item key="konsul">Histori Konsul</NavDropdown.Item>
        <NavDropdown.Item key="admin">Hubungi Admin</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item key="credit" disabled>Credit: Rp 2.000.000,-</NavDropdown.Item>
        </>
      );
    }

    list.push(
      <NavDropdown.Item key="logout">Logout</NavDropdown.Item>
    );

    return (
      <Nav as="ul">
        <Nav.Item as="li">{user.name}</Nav.Item>
        <Nav.Item as="li">
          <Image
            alt=""
            src={user.logo}
            width="40"
            height="40"
            style={{marginLeft:"5px"}}
            thumbnail
          ></Image>
        </Nav.Item>
        <NavDropdown title="" drop="left" >
          {list}
        </NavDropdown>
      </Nav>
    );
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="40"
          height="40"
        ></img>
        RS Tjahaja Hati
        <small>-powered by Sinapsis</small>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {populateNav(user)}
      {populateAva(user)}

    </Navbar>
  )
}

export default NavBar;
