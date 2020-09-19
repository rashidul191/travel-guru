import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './component/Home/Home';

function App() {
  return (
    <Router>
      <Home></Home>
      <Switch>
          <Route path="/">
              
          </Route>
      </Switch>

    </Router>
  );
}

export default App;
