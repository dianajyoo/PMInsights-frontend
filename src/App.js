import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/sleep')
      .then(res => res.json())
      .then(console.log)
      .catch(console.error)
  }

  render() {
    return (
      <div className="App">
        sleepTracker
      </div>
    );
  }
}

export default App;
