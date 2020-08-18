import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Ross', age: 31},
      {name: 'Chandler', age: 31},
      {name: 'Rachel', age: 26}
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Joey', age: 30},
        {name: 'Monica', age: 26},
      ]
    });
  };

  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        {name: 'Phoebe', age: 28},
        {name: event.target.value, age: 30},
        {name: 'Monica', age: 26},
      ]
    });    
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curso: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style = {style}
        onClick={() => this.switchNameHandler('Phoebe!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Joey!')}
          changed = {this.nameChangedHandler}
        >
        {this.state.persons[1].name} doesn't share food!
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;