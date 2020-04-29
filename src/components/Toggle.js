import React, { Component } from 'react'

export class Toggle extends Component {
    render() {
        return (
            <button onClick={this.props.changePaymentType}>
                Click me
            </button>
        )
    }
}

export default Toggle;
