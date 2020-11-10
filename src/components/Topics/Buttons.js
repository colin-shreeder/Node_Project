import React, { Component } from 'react';
import Add from './buttons/Add'
import Delete from './buttons/Delete'
import Edit from './buttons/Edit'
import Home from './buttons/Home'

export default class Buttons extends Component {

  constructor() {
    super();

    this.state = {
    };
  }

  
  render() {
    return (
      <div className="buttons">
        <Home />
        <Delete />
        <Edit />
        <Add />
      </div>
    )
  }
}