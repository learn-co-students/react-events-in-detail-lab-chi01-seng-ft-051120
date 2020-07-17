import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleClick = (event) => {
    const cordArr = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(cordArr);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default CoordinatesButton;
