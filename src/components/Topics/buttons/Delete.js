import React, { Component } from 'react';

export default class Delete extends Component {

  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  }

  
  render() {
    return (
      <div className="button">
        <button className="deleteButton" onClick={()=>this.props.deleteLead()} > Delete </button>
      </div>
    )
  }
}