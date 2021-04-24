import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class userDetails extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeHobby= this.onChangeHobby.bind(this);
      this.onchangeAddress=this.onChangeAddress.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username:'',
        Hobby:'',
        Address:'',
      }
    }
  

    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      })
    }
  
    onChangeHobby(e) {
      this.setState({
        hobby: e.target.value
      })
    }
    onChangeAddress=(e)=> {
      this.setState({
        address: e.target.value
      })
    }
  
  
    onSubmit(e) {
      e.preventDefault();
  
      const user = {
        username: this.state.username,
        hobby: this.state.hobby,
        address: this.state.address
      }
  
      console.log(user);
      
       

      this.setState({
        username: '',
        Hobby: '',
        Address:'',
      })

    }

render() {
    return (
    <div>
      <h3>Answer the Following</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>What's Your Name? </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}/>
              
        </div>
        <div className="form-group"> 
          <label>What is your hobby? </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.hobby}
              onChange={this.onChangeHobby}
              />
        </div>
        <div className="form-group"> 
          <label>Where are you from? </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
              />
        </div>
        <div className="form-group">
          <Link to="/chart"  className="nav-link">Show Result in Bar</Link>
          <Link to="/chart2"  className="nav-link">Show Result in Pie chart</Link>
          <Link to="/chart3"  className="nav-link">Show Result in Doughnut chart</Link>
        </div>
      </form>
    </div>
    )
  }
}
