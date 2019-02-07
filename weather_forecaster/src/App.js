import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import MainCard from "./components/MainCard";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <SearchBar />
          </div>
          <div className="row">
            <MainCard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
