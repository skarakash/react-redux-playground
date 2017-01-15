import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
    render(){
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <Link to="/users" type="button" className="btn btn-default navbar-btn users__nav-button">Users</Link>
                        <Link to="/news" type="button" className="btn btn-default navbar-btn">News</Link>
                    </div>
                </nav>
                <div className="container">
                <h1>There's no such place like 127.0.0.1</h1>
                </div>
            </div>
        )
    }
}

export default HomePage;