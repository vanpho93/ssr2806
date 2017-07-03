import React, { Component } from 'react';
import Task from '../models/Task';
import Note from './Note';
import NoteForm from './NoteForm';

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
        this.removeNote = this.removeNote.bind(this);
        this.onToggleIsAdding = this.onToggleIsAdding.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
    }

    onAddTask(subject, desc) {
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

    removeNote(index) {
        const newArrTask = this.state.arrTask.filter((e, i) => i !== index);
        this.setState({ arrTask: newArrTask });
    }

    render() {
        const getForm = (isAddingState) => {
            const buttonJSX = <button onClick={this.onToggleIsAdding}>+</button>;
            if (!isAddingState) return buttonJSX;
            return <NoteForm handleAddTask={this.onAddTask} />;
        };
        return (
            <div>
                { getForm(this.state.isAdding) }
                { this.state.arrTask.map((e, i) => (
                    <Note 
                        key={e.desc} 
                        task={e} 
                        onRemove={this.removeNote} 
                        index={i} 
                    />)) }
            </div>
        );
    }
}
