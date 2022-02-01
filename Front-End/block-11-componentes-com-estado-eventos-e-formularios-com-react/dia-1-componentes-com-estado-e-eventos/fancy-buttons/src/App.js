import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */


class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  constructor() {
    super()
    this.state = {
      clickNumbers : 0,
      clickNumbers2 :0,
      clickNumbers3 :0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  } 
  handleClick = () => {
    this.setState((previewState, _props) => ({
      clickNumbers: previewState.clickNumbers +1
    }))
  }
  handleClick2() {
    this.setState((previewState, _props) => ({
      clickNumbers2: previewState.clickNumbers2 +1
    }))
  }
  handleClick3() {
    this.setState((previewState, _props) => ({
      clickNumbers3: previewState.clickNumbers3 +1
    }))
  }
  getcolor (num) {
    console.log('Função getcolor', num);
    if (num % 2 === 0 && num !== 0 ) {
      return 'green';
    }
    return 'white';
  }
  
  render() {
    return (
    <div>
    <button style={{backgroundColor:this.getcolor(this.state.clickNumbers)}} onClick={this.handleClick}>Números de Clique {this.state.clickNumbers}</button>
    <button style={{backgroundColor:this.getcolor(this.state.clickNumbers2)}} onClick={this.handleClick2}>Números de Clique {this.state.clickNumbers2}</button>
    <button style={{backgroundColor:this.getcolor(this.state.clickNumbers3)}} onClick={this.handleClick3}>Números de Clique {this.state.clickNumbers3}</button>
    </div>);
  }
}

export default App;
