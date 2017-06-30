import React, { Component } from 'react';

export default class Note extends Component {
    render() {
        const { subject, desc } = this.props.task;
        return (
            <div>
                <h3>{ subject }</h3>
                <p>{ desc }</p>
            </div>
        );
    }
}
