import React, { Component } from 'react';

export default class ButtonBox extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleUp}>+</button>
                <button onClick={this.props.handleDown}>-</button>
            </div>
        );
    }
}
