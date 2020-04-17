import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Layout({ children }) {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">FullStackEngineerChallenge </a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink to="/login"><span className="glyphicon glyphicon-log-out"></span> Logout</NavLink></li>
                    </ul>
                </div>
            </nav>

            <div className="container">
                <div className="row content">
                    <div className="col-sm-2 sidenav text-left">
                        <p><NavLink to="/employees">Employees</NavLink></p>
                        <p><NavLink to="/reviews">Performance review</NavLink></p>
                    </div>
                    <div className="col-sm-8 text-left">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}