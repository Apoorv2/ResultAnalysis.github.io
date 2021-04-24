import React, { Component } from 'react';
import Chart from './components/Chart.component';
import Result from './components/Result.componenent';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component"

class App extends Component {
 
  render() {
    return (
      <Router>
      <div  className="Container">
       <Navbar />
       <br/>
        <Route path="/" component={Result}/>
        <Route path="/chart" component={Chart}/> 
      </div>
      </Router>
    );
  }
}

export default App;
