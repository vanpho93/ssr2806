import React, { Component } from 'react';
import Info from './Info';

export default class Box extends Component {

    constructor(props) {
        super(props);
        this.setInfo = this.setInfo.bind(this);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
    }

    setInfo(infoInstance) {
        this.info = infoInstance;
    }

    up() {
        const newValue = this.info.state.value + 1;
        this.info.setState({ value: newValue });
    }

    // down() {
    //     const info = this.refs.MY_INFO;
    //     const newValue = info.state.value - 1;
    //     info.setState({ value: newValue });
    // }
    down() {
        const newValue = this.info2.state.value - 1;
        this.info2.setState({ value: newValue });
    }

    render() {
        return (
            <div>
                <button onClick={this.up}>+</button>
                <button onClick={this.down}>-</button>
                <Info setInfo={this.setInfo} ref={info => { this.info2 = info; }} />
            </div>
        );
    }
}
