import React, { Component } from 'react';

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: 1
        };
    }
    render() {
        return (
            <div>{this.state.value}</div>
        );
    }
}
