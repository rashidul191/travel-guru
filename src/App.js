import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Destination from './component/Destination/Destination';
import Heder from './component/Heder/Heder';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Nomatch from './component/Nomatch/Nomatch';
import CoxsBazar from './component/Cox\'sBazar/CoxsBazar';
import Sreemangal from './component/Sreemangal/Sreemangal';
import Sundarbans from './component/Sundarbans/Sundarbans';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext = createContext ();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Heder></Heder>
        
        <Switch>

            <Route exact path="/">
            <Home></Home> 
            </Route>

            <Route path="/home">
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
            <PrivateRoute path="/destination">
              <Destination></Destination>
            </PrivateRoute>
            <Route path="*">
                <Nomatch></Nomatch>
            </Route>

        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
