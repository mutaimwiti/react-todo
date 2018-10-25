import React, {Component} from 'react';


export default class Search extends Component {
    render() {
        const {defaultQuery, onUpdateQuery} = this.props;

        return (
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2"
                       type="search"
                       placeholder="Search"
                       aria-label="Search"
                       defaultValue={defaultQuery}
                       onChange={(event) => onUpdateQuery(event.target.value)}/>
            </form>
        )
    }
}