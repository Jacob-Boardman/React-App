import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "App-header">
          <h1><Header title = "This is a title" /></h1>
          <h2><Header title = "This is a subtitle" /></h2>
          <div><Content /></div>
        </div>
      </div>
    );
  }
}

export default App;
