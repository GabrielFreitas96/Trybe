import React, {Component} from "react";
import Pokemon from "./Pokemon";
import './App.css';
import pokemons from './data.js';

class Pokedex extends Component {
  render () {
    return (
      <section className="Pokedex-container">
       { pokemons.map(({ id, name, type, averageWeight, image}) =>(<Pokemon 
       key={id}
       name={name}
       type={type}
       weigth={averageWeight.value}
       unit={averageWeight.measurementUnit}
       image={image}/>))
      }
      </section>
    );
  }
}

export default Pokedex;