import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import './App.css';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
