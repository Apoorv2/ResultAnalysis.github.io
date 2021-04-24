import React, { Component } from 'react';
import Chart from './components/Chart.component';
import Chart2 from './components/Chart2.component';
import Chart3 from './components/Chart3.component';
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
        <Route path="/" exact component={Result}/>
        <Route path="/chart" component={Chart}/> 
        <Route path="/chart2" component={Chart2}/> 
        <Route path="/chart3" component={Chart3}/>
      </div>
      </Router>
    );
  }
}

export default App;
