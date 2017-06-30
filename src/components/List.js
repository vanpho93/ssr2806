import React, { Component } from 'react';
import Task from '../models/Task';
import Note from './Note';

const arrTask = [
    new Task('Cong viec', 'Viet bao cao cuoi thang'),
    new Task('Hoc tap', 'Lam do an cuoi khoa'),
    new Task('An choi', 'Di choi cuoi tuan')
];

export default class List extends Component {
    render() {
        return (
            <div>{ arrTask.map(e => <Note key={e.desc} task={e} />) }</div>
        );
    }
}
