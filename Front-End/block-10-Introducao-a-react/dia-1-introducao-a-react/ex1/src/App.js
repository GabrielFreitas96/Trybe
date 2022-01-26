import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const list = ['Meditação', 'Tomar Café', 'Entrar na monitoria','Almoçar','Dia na Trybe'];
    const Task = (array) => (array.map((element) =>  <li>{element}</li>));
    return (
      <div className="App">
      <h2>Lista de Tarefas</h2>
      <ol> {Task(list)} </ol>
      </div>
    );
  }
}

export default App;
