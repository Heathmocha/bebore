import React, { Component } from 'react';
import logo from './logo.svg';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                {/* TODO - need a better logo...if at all. Would be funny to have something for myself */}
                <img src={logo} className="Header-logo" alt="logo" />
                <h2>Bebore</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="entry">Entry</a></li>
                    <li><a href="inventory">Inventory</a></li>
                    <li><a href="history">History</a></li>
                </ul>
            </div>

        );
    }
}

export default Header;
