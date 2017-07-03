import React, { Component } from 'react';

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdating: false
        };
        this.toggleIsUpdating = this.toggleIsUpdating.bind(this);
        this.onRemoveNote = this.onRemoveNote.bind(this);
        this.onSaveNote = this.onSaveNote.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    onRemoveNote() {
        this.props.onRemove(this.props.index);
    }

    getDescJSX() {
        const { desc } = this.props.task;
        const { isUpdating } = this.state;
        const updatingJSX = (
            <div>
                <input defaultValue={desc} type="text" ref="txtDesc" /> 
                <br /><br />
            </div> 
        );
        return isUpdating ? updatingJSX : <p>{desc}</p>;
    }

    onSaveNote() {
        const desc = this.refs.txtDesc.value;
        const { index } = this.props;
        this.props.onSaveNote(index, desc);
        this.setState({ isUpdating: false });
    }

    onCancel() {
        this.setState({ isUpdating: false });
    }

    getController() {
        const { isUpdating } = this.state;
        const updatingJSX = (
            <div>
                <button onClick={this.onSaveNote}>Save</button>
                <button onClick={this.onCancel}>Cancel</button>
            </div> 
        );

        const showingJSX = (
            <div>
                <button onClick={this.onRemoveNote}>Delete</button>
                <button onClick={this.toggleIsUpdating}>Update</button>
            </div>
        );
        return isUpdating ? updatingJSX : showingJSX;
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
                { this.getController() }
            </div>
        );
    }
}
