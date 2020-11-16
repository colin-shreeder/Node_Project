import React, { Component } from 'react';

export default class Edit extends Component {

  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  }

  
  render() {
   const {updateLeads} = this.props;
    return (
      <div className="button">
        <button className="confirmationButton" onClick={()=>updateLeads(this.props.id)} > Update </button>
      </div>
    )
  }
}