import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
        {name: 'Ross', age: 31},
        {name: 'Chandler', age: 31},
        {name: 'Rachel', age: 26}
      ]
  }

  switchNameHandler = () => {
    // console.log('was clicked!');
    this.setState({
      persons: [
        {name: 'Phoebe', age: 28},
        {name: 'Monica', age: 26},
        {name: 'Joey', age: 30}
        ]
      }      
    )
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick = {this.switchNameHandler}>Switch Names</button>
        <Person name = {this.state.persons[0].name} age =  {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age =  {this.state.persons[1].age}>{this.state.persons[1].name} doesn't share food!</Person>
        <Person name = {this.state.persons[2].name} age =  {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'))
  }
}

export default App;