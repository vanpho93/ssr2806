import React, { Component } from 'react';

export default class Note extends Component {
    onRemoveNote() {
        this.props.onRemove(this.props.index);
    }

    render() {
        const { subject, desc } = this.props.task;
        return (
            <div>
                <h3>{ subject }</h3>
                <p>{ desc }</p>
                <button onClick={this.onRemoveNote.bind(this)}>Delete</button>
            </div>
        );
    }
}
