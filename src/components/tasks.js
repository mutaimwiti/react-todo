import React, { Component } from 'react';
import Task from "./task";
import Search from "./search";
import Create from "./create";

export default class Tasks extends Component{
    STATUS_MAP = {
        pending: 'started',
        started: 'finished',
        finished: 'pending',
    };

    constructor(props) {
        super(props);
        this.state = {
            autoIncrement: 3,
            tasks: [
                {id: 1, title: 'Cook', status: 'pending'},
                {id: 2, title: 'Code', status: 'started'},
                {id: 3, title: 'Scream', status: 'finished'},
            ],
            query: '',
        };
    }

    componentDidMount() {
        this.setState({results: this.state.tasks})
    }

    handleAddTask = (value) => {
        let {tasks, autoIncrement} = this.state;
        autoIncrement += 1;
        tasks.push({id: autoIncrement, title: value, status: 'pending'});
        this.setState({tasks, autoIncrement});
    };

    handleUpdateQuery = (query) => {
        this.setState({query});
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

    handleDelete = (task) => {
        const tasks = this.state.tasks.filter(tsk => tsk !== task);
        this.setState({tasks});
    };

    filterTasks() {
        return this.state.tasks.filter(({status, title}) => {
            status = status.toLowerCase();
            title = title.toLowerCase();
            for (let pattern of (this.state.query.toLowerCase()).split(' ')) {
                if (status.includes(pattern) || title.includes(pattern)) return true;
            }
            return false;
        });
    };

    render() {
        return (
            <>
                <Create onAddTask={this.handleAddTask}/>
                <Search onUpdateQuery={this.handleUpdateQuery}/>
                {this.filterTasks().map(task =>
                    <Task key={task.id}
                          task={task}
                          onUpdateStatus={this.handleUpdateStatus}
                          onDelete={this.handleDelete}
                    />
                )}
            </>
        )
    }
}
