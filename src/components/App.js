import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <MuiThemeProvider>
      <div>
        <div className="nav" >
        <NavLink className="nav-item" exact to="/">Home</NavLink>
        <NavLink className="nav-item" exact to="/career">Career</NavLink>
        <NavLink className="nav-item" exact to="/hobbies">Hobbies</NavLink>
        <NavLink className="nav-item" exact to="/family">Family</NavLink>
        <NavLink className="nav-item" exact to="/contact">Contact</NavLink>
        </div>
        <Route exact path="/" component={Home} />
      </div>
      </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
