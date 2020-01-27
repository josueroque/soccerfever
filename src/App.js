import React,{Component} from 'react';
import "./index.css";
import "bootswatch/dist/united/bootstrap.min.css"; 
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from './components/Home';
import Country from './components/Country';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 
class App  extends Component {
  render(){ 
    return (
          
        <Router>
          <Switch>
            <Route exact path="/country/:id"  component={Country}  />
            <Route exact path='/' component={Home}  />
            
          </Switch>
          
      </Router>
    );
  }
  }

export default App;
