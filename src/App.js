import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Login from './pages/Login';

// import logo from './logo.svg';
// import './App.css';

const App =()=>{
  const [user,setUser] = useState("pasien");

  return (
    <Router>
      <NavBar/>
      <Route path="/" exact component={Login}></Route>
    </Router>
  );
}
export default App;

const user = [
  "pasien",
  "dokter",
  "admin"
]
