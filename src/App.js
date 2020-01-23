import React from 'react';
//import "./css/bootstrap.min.css";
import "bootswatch/dist/united/bootstrap.min.css"; 
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
        
      <Router>
        <Switch>
          {/* <Route exact path="/detail/:id" component={Detail}  /> */}
      
          <Route exact path='/' component={Home}  />

        </Switch>
        
    </Router>
  );
}

export default App;
