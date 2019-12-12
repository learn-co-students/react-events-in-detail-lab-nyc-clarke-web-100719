// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component{

    useTimeout = (e) =>{
        e.persist();
        // console.log(e);
        let timer = setTimeout(() =>{
            this.props.onDelayedClick(e);
        }, this.props.delay);
        return ()=>timer();
    }

    render()
    {
        return(
            <button onClick={this.useTimeout}>Delayed Button</button>
        )
    }

}