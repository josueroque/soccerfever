import React,{Component} from 'react';
import "./index.css";
import "bootswatch/dist/united/bootstrap.min.css"; 
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from './components/Home';
import Country from './components/Country';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
class App  extends Component {
  render(){ 
    return (
          
        <Router>
          <Provider store={store}>
          <Switch>
            <Route exact path="/country/:id"  component={Country}  />
            <Route exact path='/' component={Home}  />
            
          </Switch>
          </Provider>
      </Router>
    );
  }
  }

export default App;
