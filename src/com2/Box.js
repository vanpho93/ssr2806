import React, { Component } from 'react';
import ButtonBox from './ButtonBox';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    render() {
        return (
            <div>
                <h3>{this.state.value}</h3>
                <ButtonBox />
            </div>
        );
    }
}
