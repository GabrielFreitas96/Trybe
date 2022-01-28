import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Pokedex from './Pokedex';
// import Pokedex from './Pokedex'

class App extends Component {
  render() {
    return (
      <article>
        <Header />
        <Pokedex />
      </article>
    );
  }
}

export default App;
