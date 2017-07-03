import React, { Component } from 'react';
import ButtonBox from './ButtonBox';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
    }

    up() {
        this.setState({ value: this.state.value + 1 });
    }

    down() {
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        return (
            <div>
                <h3>{this.state.value}</h3>
                <ButtonBox handleUp={this.up} handleDown={this.down} />
            </div>
        );
    }
}
