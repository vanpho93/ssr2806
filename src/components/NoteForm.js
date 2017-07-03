import React, { Component } from 'react';

export default class NoteForm extends Component {
    onAddTask() {
        const { txtSubject, txtDesc } = this.refs;
        this.props.handleAddTask(txtSubject.value, txtDesc.value);
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Subject" ref="txtSubject" />
                <br /><br />
                <input type="text" placeholder="Desciption" ref="txtDesc" />
                <br /><br />
                <button onClick={this.onAddTask.bind(this)}>Add</button>
                <button>Cancel</button>
            </div>
        );
    }
}