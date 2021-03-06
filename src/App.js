import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 27 },
      { name: 'Stef', age: 26 }
    ]
  }

  switchNameHandler = () => {
    //console.log('Was clicked');
    this.setState( {
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 27 },
        { name: 'Stef', age: 36 }
      ]
    } )
  }

  render() {
    return (
     <div className="App">
       <h1>Hi, I am a React App</h1>
       <p>This is really working!</p>
       <button onClick={this.switchNameHandler}>Switch name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My hobbies: Racing</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
     </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement( 'h1', null, 'Hi, I am a React App!!!'));
  }
}

export default App;
