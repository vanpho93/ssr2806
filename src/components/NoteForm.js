import React, { Component } from 'react';

export default class NoteForm extends Component {
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Subject" 
                />
                    <br /><br />
                <input type="text" placeholder="Desciption" ref="txtDesc" />
                    <br /><br />
                <button>Add</button>
                <button>Cancel</button>
            </div>
        );
    }
}