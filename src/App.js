import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Login from './pages/Login';

// import logo from './logo.svg';
// import './App.css';

const App =()=>{
  const [user,setUser] = useState(userDummy[2]);

  return (
    <Router>
      <NavBar user={user}/>
      <Route path="/" render={()=><Login user={user}/>}></Route>
    </Router>
  );
}
export default App;

const userDummy = [
  "pasien",
  "dokter",
  "admin",
  null
]
