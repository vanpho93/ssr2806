import React, { Component } from 'react';

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdating: false
        };
        this.toggleIsUpdating = this.toggleIsUpdating.bind(this);
        this.onRemoveNote = this.onRemoveNote.bind(this);
    }

    onRemoveNote() {
        this.props.onRemove(this.props.index);
    }

    getDescJSX() {
        const { desc } = this.props.task;
        const { isUpdating } = this.state;
        const updatingJSX = (
            <div>
                <input defaultValue={desc} type="text" /> 
                <br /><br />
            </div> 
        );
        return isUpdating ? updatingJSX : <p>{desc}</p>;
    }

    toggleIsUpdating() {
        this.setState({ isUpdating: !this.state.isUpdating });
    }

    render() {
        const { subject } = this.props.task;
        return (
            <div>
                <h3>{ subject }</h3>
                { this.getDescJSX() }
                <button onClick={this.onRemoveNote}>Delete</button>
                <button onClick={this.toggleIsUpdating}>Update</button>
            </div>
        );
    }
}
