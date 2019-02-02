import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

/* what is the myImage thing doing? Is the {} passing in that source to the Image.js file? */

class App extends Component {
  render() {
    return (
      <div className="App">
          <Image myImage={"https://www.filevine.com/wp-content/uploads/2018/01/group-3.png"} />
      </div>
    );
  }
}

export default App;
