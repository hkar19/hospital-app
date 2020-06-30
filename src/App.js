import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, useHistory, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Login from './pages/Login';
import Pasien from './pages/Pasien';
import Dokter from './pages/Dokter';
import Chat from './pages/Chat';
import Admin from './pages/Admin';

// import logo from './logo.svg';
// import './App.css';

const App =()=>{
  const [user,setUser] = useState(null);

  const [logIn,setLogIn] = useState(false);

  let history = useHistory();

  const userSubmitHandler = (input)=>{
    //implementation here
    console.log("Login authorized")
    if(userDummy[input]){
      setUser(input);
      setLogIn(true);
      // history.push("/")
    }
    else return;
  }

  const handleLogOut = ()=>{
    setUser(null);
    setLogIn(false);
  }

  return (
    <Router>
      {user === null ? []:(<NavBar user={user} handleLogOut={handleLogOut}/>)}
      <Route exact path="/">
        {logIn ? (<Redirect to={`/${user}`}/>): (<Login userSubmitHandler={userSubmitHandler}/>)}
      </Route>

      {/* pasien */}
      <Switch>
        <Route path="/pasien/chat">
          {logIn ? (user==="pasien" ? <Chat user={user}/> : <Redirect to={`/${user}`}/>):(<Redirect to="/"/>)}
        </Route>
        <Route path="/pasien">
          {logIn ? (user==="pasien" ? <Pasien/> : <Redirect to={`/${user}`}/>):(<Redirect to="/"/>)}
        </Route>
      </Switch>

      {/* dokter */}
      <Switch>
        <Route path="/dokter/chat">
          {logIn ? (user==="dokter" ? <Chat user="dokter"/> : <Redirect to={`/${user}`}/>):(<Redirect to="/"/>)}
        </Route>
        <Route path="/dokter">
          {logIn ? (user==="dokter" ? <Dokter/> : <Redirect to={`/${user}`}/>):(<Redirect to="/"/>)}
        </Route>
      </Switch>

      <Route path="/admin">
        {logIn ? (user==="admin" ? <Admin/> : <Redirect to={`/${user}`}/>):(<Redirect to="/"/>)}
      </Route>
    </Router>
  );
}
export default App;

const userDummy = {
  "admin":true,
  "pasien":true,
  "dokter":true
}
