import React, { Component } from "react";
import './App.css'

class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    
    const paragraph = (aray) =>(aray.map(({conteudo, status, bloco}, index) => <div className='card'key= {index} >   O conteudo: {conteudo} <br />  Status:{status} <br /> Bloco: {bloco} </div>));
    
    // const conteudo = ((array) => array.map((item) => item.conteudo));
    // const bloco = ((array) => array.map((item) => item.bloco));
    // const status = ((array) => array.map((item) => item.status));
    return(
    <div className='container'>
    {paragraph(conteudos)} 
    </div>
    );
  }
}
export default Content;