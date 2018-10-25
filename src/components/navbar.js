import React, { Component } from 'react';

export default class NavBar extends Component{
    render() {
        return (
            <nav className="navbar navbar-light bg-primary">
                <a className="navbar-brand" href="#">Task Pro</a>
            </nav>
        )
    }
}