import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SubNavBar from "../src/components/SubNavBar"
import NavBar from "./components/NavBar"
import './App.css';
import Home from './pages/Home'
import Sign from './pages/Sign'
import Red from './pages/Red';
import Blue from './pages/Blue';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <Router>
      <NavBar />
      <SubNavBar />
      <Switch>
        <Route exact path="/" component={Sign} />
        <Route exact path="/sign" component={Sign} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/red" component={Red} />
        <Route exact path="/blue" component={Blue} />
       </Switch>
    </Router>
  );
}

export default App;
