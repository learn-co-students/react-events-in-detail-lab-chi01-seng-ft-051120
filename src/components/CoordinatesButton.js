import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    createArray = (event) => {
        const x = event.clientX
        const y = event.clientY
        const XYCoords = [x, y]
        this.props.onReceiveCoordinates(XYCoords)
    }
    render(){
        return (
            <button onClick={this.createArray} />
        )
    }
}