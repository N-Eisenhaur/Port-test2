import React, { Component } from "react";
import "./Box.css";

class box extends Component {
    
  
   
    render() {
      return (
        <div className="shoebox">
          <h1>Features</h1>
          <div className="grid">
            <div className="box box4"></div>
            <div className="box box1"></div>
            <div className="box box2"></div>
            <div className="box box3"></div>
          </div>
        </div>
      );
    }
  }



  export default box;
