import React from 'react'

// Code CoordinatesButton Component Here
class CoordinatesButton extends React.Component {
    render() {
        return( 
            <button onClick={(event) =>  this.props.onReceiveCoordinates([event.clientX, event.clientY])}>I'm the Coordinates Button</button>
        )
    }
}

export default CoordinatesButton
