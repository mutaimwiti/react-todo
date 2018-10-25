import React, { Component } from 'react';

export default class Task extends Component{
    ACTION_MAP = {
        pending: 'start',
        started: 'finish',
        finished: 'undo',
    };

    render() {
        const {task, onUpdateStatus} = this.props;

        return (
            <div style={{marginTop: 5}}>
                <div className={'row'}>
                    <span className={'col-md-2'}>
                        #{task.id}
                    </span>
                    <span className={'col-md-3'}>
                        {task.title}
                    </span>
                    <span className={'col-md-2'}>
                        {task.status}
                    </span>
                    <span className={'col-md-5'}>
                    <button className={'btn btn-primary btn-sm mr-1'}
                            onClick={() => onUpdateStatus(task)}>{this.getNextAction(task)}</button>
                    <button className={'btn btn-danger btn-sm'}>Delete</button>
                </span>
                </div>
            </div>
        )
    }

    getNextAction = (task) => {
        return this.ACTION_MAP[task.status]
    }
}

