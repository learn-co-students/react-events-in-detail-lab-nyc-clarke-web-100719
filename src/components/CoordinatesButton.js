import React, { Component } from 'react';

class CoordinatesButton extends Component {

    sendCoordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
   
    render() {
        console.log(this.props)
        return (
            <button onClick={this.sendCoordinates}>Coordinates Button</button>
        )
    }
}

export default CoordinatesButton