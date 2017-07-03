import React, { Component } from 'react';
import Info from './Info';

export default class Box extends Component {
    render() {
        return (
            <div>
                <button>+</button>
                <button>-</button>
                <Info />
            </div>
        );
    }
}
