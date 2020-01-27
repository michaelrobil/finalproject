import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SubNavBar from "../src/components/SubNavBar"
import NavBar from "./components/NavBar"
import './App.css';
import Search from './pages/Search'
import SignUp from './pages/SignUp'
import CompanyForm from './pages/CompanyForm';
import CompanyView from './pages/CompanyView';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/sign" component={SignUp} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/companyform" component={CompanyForm} />
        <Route exact path="/companyview" component={CompanyView} />
       </Switch>
    </Router>
  );
}

export default App;
