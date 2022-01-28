import React, { Component } from "react";
import './App.css';
import PropTypes, { number } from 'prop-types';

class Pokemon extends Component {
  render () {
    const { name, type, weigth, unit, image } = this.props
    return (
      <div className="Pokemon-card">
        <div className="Pokemon-card-info">
          <p>{name}</p>
          <p>{type}</p>
          <p>{`Average weigth: ${weigth} ${unit}`}</p>
        </div>
        <div className="Pokemon-card-image">
          <img src={image} alt={`Pokemon: ${name}`}></img>
        </div>
      </div>

    );
  }
}

const { string } = PropTypes
Pokemon.propTypes ={
  name: string.isRequired, 
  type: string.isRequired,
  weigth: number.isRequired,
  unit: string.isRequired,
  image: string.isRequired,
};

export default Pokemon;