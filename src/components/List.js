import React, { Component } from 'react';
import Task from '../models/Task';
import Note from './Note';

const arrTask = [
    new Task('Cong viec', 'Viet bao cao cuoi thang'),
    new Task('Hoc tap', 'Lam do an cuoi khoa'),
    new Task('An choi', 'Di choi cuoi tuan')
];

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            arrTask,
            isAdding: false,
            subjectInput: 'aaa' 
        };

        this.onAddTask = this.onAddTask.bind(this);
    }

    onAddTask() {
        const subject = this.refs.txtSubject.value;
        const desc = this.refs.txtDesc.value;
        this.refs.txtDesc.value = ''; 
        this.refs.txtSubject.value = '';
        const task = new Task(subject, desc);
        this.setState({ 
            arrTask: [task].concat(this.state.arrTask),
            isAdding: !this.state.isAdding
        });
    }

    onToggleIsAdding() {
        this.setState({ isAdding: !this.state.isAdding });
    }

    onChangeSubject(event) {
        this.setState({ subjectInput: event.target.value });
    }

    render() {
        const getForm = (isAddingState) => {
            const buttonJSX = <button onClick={this.onToggleIsAdding.bind(this)}>+</button>
            if (!isAddingState) return buttonJSX;
            return (
                <div>
                    <input 
                        type="text" 
                        placeholder="Subject" 
                        value={this.state.subjectInput} 
                        onChange={this.onChangeSubject.bind(this)}
                    />
                        <br /><br />
                    <input type="text" placeholder="Desciption" ref="txtDesc" />
                        <br /><br />
                    <button onClick={this.onAddTask}>Add</button>
                    <button onClick={this.onToggleIsAdding.bind(this)}>Cancel</button>
                </div>
            );
        };
        return (
            <div>
                { getForm(this.state.isAdding) }
                { this.state.arrTask.map(e => <Note key={e.desc} task={e} />) }
            </div>
        );
    }
}
