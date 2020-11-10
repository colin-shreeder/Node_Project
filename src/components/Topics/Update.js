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
           <span>Id:</span> <input className="updateData"  /> &nbsp;
           <span>Name:</span> <input className="updateData"  /> &nbsp;
           <span>Phone:</span> <input className="updateData"  /> &nbsp;
           <span>Email:</span> <input className="updateData"  /> &nbsp;
           <span>Disposition:</span> <input className="updateData"  /> &nbsp;
           <span>Notes:</span> <input className="updateData"  /> &nbsp;
            
          </div>
        )
      }
}
