import React, { Component } from 'react';

export default class Update extends Component{
    constructor() {
        super();
        this.state = {
        
        };
    }


     

    render() {
        return (
          <div className="update">
           <span>Id:</span> <input onChange={(e)=>this.props.formChange(e)} className="updateData" name="id" value={this.props.id}  /> &nbsp;
           <span>Name:</span> <input onChange={(e)=>this.props.formChange(e)} className="updateData" name="name" value={this.props.name}  /> &nbsp;
           <span>Phone:</span> <input onChange={(e)=>this.props.formChange(e)} className="updateData" name="phone" value={this.props.phone}  /> &nbsp;
           <span>Email:</span> <input onChange={(e)=>this.props.formChange(e)} className="updateData" name="email" value={this.props.email}  /> &nbsp;
           <span>Disposition:</span> <input onChange={(e)=>this.props.formChange(e)} className="updateData" name="disposition" value={this.props.diposition}  /> &nbsp;
           <span>Notes:</span> <input onChange={(e)=>this.props.formChange(e)} className="updateData" name="notes" value={this.props.notes}  /> &nbsp;
            
          </div>
        )
      }
}
