import React, { Component } from 'react';
import Info from './Info';

export default class Box extends Component {

    constructor(props) {
        super(props);
        this.setInfo = this.setInfo.bind(this);
        this.up = this.up.bind(this);
    }

    setInfo(infoInstance) {
        this.info = infoInstance;
    }

    up() {
        const newValue = this.info.state.value + 1;
        this.info.setState({ value: newValue });
    }

    render() {
        return (
            <div>
                <button onClick={this.up}>+</button>
                <button>-</button>
                <Info setInfo={this.setInfo} />
            </div>
        );
    }
}
