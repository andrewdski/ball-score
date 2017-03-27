import React from 'react';
import logo from './logo.svg';
import Team from './Team';
import './App.css';

const team = [
  { "name": "Flynn Marrinson", "number": "13" },
  { "name": "Claire Marrinson", "number": "23" },
  { "name": "Maggie Marrinson", "number": "17" }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
		<Team players={team}/>
      </div>
    );
  }
}

export default App;
