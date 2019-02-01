import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      team: [
        "Chandler",
        "Garrett",
        "Michael",
        "Travis",
        "Steve",
        "Kate",
        "Nick",
        "Brooke",
        "Maddie"
      ]
    };
  }

  search(value) {
    this.setState({text: value});
  }
  
  render() {
    let searchResults = this.state.team.filter( (element, index) => {
      return element.includes( this.state.text );
    }).map( (element, index) => {
      return <h2 key={ index }>{ element }</h2>
    })
    
    return (
      <div className="App">
        <input onChange={ (e) => this.search(e.target.value) } type="text"/>
        { searchResults }
      </div>
    );
  }
}

export default App;
