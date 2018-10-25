import React, {Component} from 'react';

class Create extends Component{
    state  = {
        task: '',
    };

    setTask(task) {
        this.setState({task})
    }

    handleChange = (evt) => this.setTask(evt.target.value);

    handleSubmit = (evt) => {
        evt.preventDefault();
        let {task} = this.state;
        task = task.trim();
        this.setTask('');
        if (task !== '') {
            this.props.onAddTask(task)
        }
    };

    render() {
        return (
            <>
                <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                    <input type={'text'}
                           value={this.state.task}
                           className={'form-control'}
                           placeholder="Add task"
                           onChange={this.handleChange}/>
                </form>
            </>
        )
    }
}

export default Create;
