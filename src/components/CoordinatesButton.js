// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    sendArrayCoordinates = (event) => {
        const x = event.clientX
        const y = event.clientY
        const coordinates = [x, y]
        this.props.onReceiveCoordinates(coordinates)
    }
    
    render() {
        return(
            <button
            onClick={this.sendArrayCoordinates}>
            </button>
        )
    }
}