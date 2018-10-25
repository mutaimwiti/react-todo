import React, { Component } from 'react';
import Task from "./task";
import Search from "./search";

export default class Tasks extends Component{
    constructor(props) {
        super(props);
        this.state = {
            latest: 4,
            tasks: [
                {id: 1, title: 'Cook', status: 'pending'},
                {id: 2, title: 'Code', status: 'started'},
                {id: 3, title: 'Scream', status: 'finished'},
            ],
            results: [],
        };
    }

    componentDidMount() {
        this.setState({results: this.state.tasks})
    }

    STATUS_MAP = {
        pending: 'started',
        started: 'finished',
        finished: 'pending',
    };

    handleUpdateQuery = (query) => {
        const patterns = (query.toLowerCase()).split(' ');

        const results = this.state.tasks.filter(({status, title}) => {
            status = status.toLowerCase();
            title = title.toLowerCase();

            for (let pattern of patterns) {
                if (status.includes(pattern) || title.includes(pattern)) return true;
            }

            return false;
        });

        this.setState({results})
    };

    handleUpdateStatus = (task) => {
        const tasks = this.state.tasks.map((tsk) => {
            if (tsk === task) {
                tsk.status = this.STATUS_MAP[task.status];
            }
            return tsk;
        });
        this.setState({tasks});
    };

    render() {
        return (
            <>
                <Search onUpdateQuery={this.handleUpdateQuery}/>
                {this.state.results.map(task =>
                    <Task key={task.id} task={task} onUpdateStatus={this.handleUpdateStatus}/>)}
            </>
        )
    }
}

