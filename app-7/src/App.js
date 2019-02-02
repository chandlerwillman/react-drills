import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask';
import List from './List';

/* Questions

1. When do I need to include value and type on an input?
2. What does .bind do? Why do we include it in the constructor?
3. What does ... do?
4. What are props?
5. Why do we use () for return? What's actually happening here?


*/

class App extends Component {
  constructor(){
    super();

    this.state ={
      list: [],
    }

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task){
    this.setState({ list: [...this.state.list, task] });
  }
  
  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />

      </div>
    );
  }
}

export default App;
