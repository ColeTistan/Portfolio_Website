import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => (
    <nav className="nav-menu">
        <h2 className="logo"><a className="logo-link" href="#">{ props.title }</a></h2>
            <ul>
                <li><Link className="nav-menu__link" to="/">Home</Link></li>
                <li><Link className="nav-menu__link" to="/links">Links</Link></li>
                <li><Link className="nav-menu__link" to="/contact">Contact Information</Link></li>
            </ul>
    </nav>
);

export default Navbar;