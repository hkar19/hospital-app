import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Login from './pages/Login';
import Pasien from './pages/Pasien';

// import logo from './logo.svg';
// import './App.css';

const App =()=>{
  const [user,setUser] = useState(userDummy[0]);

  const userSubmitHandler = (input)=>{
    //implementation here
  }

  return (
    <Router>
      <NavBar user={user}/>
      <Route
        exact
        path="/" 
        render={(props)=><Login {...props} user={user} userSubmitHandler={userSubmitHandler}/>}
      ></Route>
      <Route
        path="/pasien"
        render={(props)=><Pasien {...props} user={user}/>}
      >
      </Route>
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
