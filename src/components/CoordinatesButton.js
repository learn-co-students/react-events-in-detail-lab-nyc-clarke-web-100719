// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{

    createButton = (e) => {
        let arr = []; 
        arr.push(e.clientX);
        arr.push(e.clientY);
        this.props.onReceiveCoordinates(arr)
    }

    render()
    {
        return(
            <button onClick={this.createButton}>
                Coordinates Button
            </button>
        )
    }

}