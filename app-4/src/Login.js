import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleLogin = this.handleLogin.bind(this); //not sure what this is
  }

  handleUsernameChange(name) {
    this.setState({username: name});
  }

  handlePasswordChange(pass) {
    this.setState({password: pass});
  }

  handleLogin(){
      alert(`Username: ${this.state.username} Password: ${this.state.password}`); //what does the ` mean and what does the $ mean
  }
  
  render() {
    return (
      <div className="App">
        <input type="text" onChange={(e) => this.handleUsernameChange(e.target.value)} />
        <input type="text" onChange={(e) => this.handlePasswordChange(e.target.value)} />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
