import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    stylesMouse: {},

    x: "",
    y: "",

    img: ""
  }

  titleMouseEnterHandler = () => {
    this.setState({
      stylesMouse: { color: 'blue', fontSize: "50px", transition: "all 1s"}
      
    })};

  titleMouseLeaveHandler = () => {
    this.setState({
      stylesMouse: { color: 'black', fontSize: "35px", transition: "all 1s"}
        
    })};

    addImageHandler = () => {
      //return React.createElement('h1', null, 'ana are mere')
    };

  mouseCoordinatesHandler = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    var xCoords = "X - " + x;
    var yCoords = "Y - " + y;
    
    this.setState({x:x,y:y});
  }

  render() {
    
    const axesStyles = {
      border : "5px solid black",
      height : "30px",
      width : "100px",
      marginLeft: "5px",
      display : "inline-block"
    };

    const buttonsStyle = {
      marginTop: "10px",
      marginLeft: "5px",
      cursor: "pointer"
    };

    return (
      //title
      <div>
        <div className="container" onMouseMove={this.mouseCoordinatesHandler}>
         <h1 className= "header" style = {this.state.stylesMouse} onMouseEnter={this.titleMouseEnterHandler}
         onMouseLeave={this.titleMouseLeaveHandler}>PentaStagiu React - tema 1</h1>
         <h3>Mouse coordinates</h3>
         <div className="x" style={axesStyles}>X:{this.state.x}</div>
         <div className = "y" style={axesStyles}>Y:{this.state.y}</div>
       </div>
       <div className="buttons" style={buttonsStyle}>
        <button className="btn" onClick={this.addImageHandler}>Add image</button>
        <button className="btn">Remove image</button>
       </div>
      </div>
       
      
      
    );
  }
}

export default App;
