import React, { Component } from 'react';
import Info from './Info';
import getWeather from '../api/getWeather';

export default class Box extends Component {

    constructor(props) {
        super(props);
        this.setInfo = this.setInfo.bind(this);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        this.call = this.call.bind(this);
    }

    setInfo(infoInstance) {
        this.info = infoInstance;
    }

    call() {
        getWeather()
        .then(resJSON => console.log(resJSON));
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
                <button onClick={this.call}>Call</button>
                <Info setInfo={this.setInfo} ref={info => { this.info2 = info; }} />
            </div>
        );
    }
}
//http://api.openweathermap.org/data/2.5/find?q=Saigon&units=metric&appid=01cc37655736835b0b75f2b395737694
