import React, {Component} from 'react'

export default class DelayedButton extends Component {
  newDelay = (event) => {
    event.persist()
    console.log(event.target)
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
    return (<button onClick={this.newDelay}></button>)
  }

} 
