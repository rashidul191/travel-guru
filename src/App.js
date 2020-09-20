import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import CoxsBazar from './component/Cox\'sBazar/CoxsBazar';

import Heder from './component/Heder/Heder';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Sreemangal from './component/Sreemangal/Sreemangal';
import Sundarbans from './component/Sundarbans/Sundarbans';

function App() {
  return (
    <Router>
      <Heder></Heder>
      
      <Switch>
          <Route exact path="/">
          <Home></Home> 
          </Route>
          <Route path="/coxsbazar">
            <CoxsBazar/>
          </Route>

          <Route path="/sreemangal">
            <Sreemangal></Sreemangal>
          </Route>

          <Route path="/sundarbans">
            <Sundarbans/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>
      </Switch>

    </Router>
  );
}

export default App;
