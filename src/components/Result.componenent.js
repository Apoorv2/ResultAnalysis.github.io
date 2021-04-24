import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class userDetails extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeHobby= this.onChangeHobby.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username:'',
        Hobby:''
      }
    }
  

    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      })
    }
  
    onChangeHobby(e) {
      this.setState({
        Mobileno: e.target.value
      })
    }
  
  
    onSubmit(e) {
      e.preventDefault();
  
      const user = {
        username: this.state.username,
        Hobby: this.state.Hobby,
      }
  
      console.log(user);
      
       

      this.setState({
        username: '',
        Hobby: ''
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
          <input  type="integer"
              required
              className="form-control"
              value={this.state.Mobileno}
              onChange={this.onChangeHobby}
              />
        </div>

        <div className="form-group">
          <Link to="/chart"  className="nav-link">Show Result</Link>
        </div>
      </form>
    </div>
    )
  }
}
