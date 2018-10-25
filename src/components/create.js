import React, {Component} from 'react';

class Create extends Component{
    state  = {
        value: '',
    };

    handleChange = (evt) => this.setState({value: evt.target.value});


    render() {
        const {onAddTask} = this.props;

        return (
            <>
                <br/>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    Add
                </button>

                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Add task</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <label className={'control-label'}>Task</label>
                                    <input type={'text'}
                                           className={'form-control'}
                                           onChange={this.handleChange}/>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button"
                                        className="btn btn-primary"
                                        onClick={() => onAddTask(this.state.value)}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Create;
