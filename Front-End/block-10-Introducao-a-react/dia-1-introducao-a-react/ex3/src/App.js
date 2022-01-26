import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
    <main>
      <Header/>
      <Content/>
      <Footer/>
    </main>
    );
  }
}

export default App;
