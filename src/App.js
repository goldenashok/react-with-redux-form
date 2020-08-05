import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Customer from './Customers.js';

function App() {
  return (
    <div className="App">

      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to="/customerlist" />
          )}>
          </Route>
          <Route exact path="/customerlist" component={Customer} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
