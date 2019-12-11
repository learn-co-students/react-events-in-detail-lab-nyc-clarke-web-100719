// Code CoordinatesButton Component Here
import React from 'react'


class CoordinatesButton extends React.Component {


    recordX = (e) => {
        let arr = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(arr)
    }

render(){
    // console.log(this.props)
    return  <button onClick ={this.recordX}> Click me</button>
}
}

export default CoordinatesButton;