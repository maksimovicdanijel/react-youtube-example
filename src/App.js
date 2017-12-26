import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h2>Youtube kind of...</h2>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
