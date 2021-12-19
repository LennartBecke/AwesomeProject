import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./components/Person"
import templates from "./templates/Templates.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Hello <Person firstName="Max" secondName="Mustermann" />
      </header>
    </div>
  );
}

export default App;
