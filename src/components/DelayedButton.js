import React, { Component } from 'react';

class DelayedButton extends Component {

    delayClick = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay);
    }

    render() {
        return (
            <button onClick={this.delayClick}>Delayed Button</button>
        )
    }
}

export default DelayedButton