import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "header">
          <Header title = "This is a title" />
          <Header title = "This is a subtitle" />
        </div>
      </div>
    );
  }
}

export default App;
