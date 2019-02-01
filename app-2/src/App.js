 import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      team: [
        "Chandler",
        "Travis",
        "Garrett",
        "Steve"
      ]
    };
  }
  
  render() {
    let teamMembers = this.state.team.map( (element,index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })
    
    return (
      <div className="App">
        { teamMembers }
      </div>
    );
  }
}

export default App;
