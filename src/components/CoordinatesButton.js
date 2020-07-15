import React, { Component } from 'react'

export default class CoordinatesButton extends Component{

  clickHandler = (event) => {
    let x = event.clientX
    let y = event.clientY
    const arr = [x, y]
    this.props.onReceiveCoordinates(arr)
  }

  render() {

    return(
      <button onClick={this.clickHandler}></button>
    )

  }
}
