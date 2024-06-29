import React from 'react';
import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">Blog</NavLink>
                    <ul className="navbar-nav d-flex flex-row gap-3 flex-nowrap">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/add" className="nav-link">
                                Add
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacts" className="nav-link">
                                 Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Toolbar;