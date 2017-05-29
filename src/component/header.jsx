import React, { Component } from 'react';
import logo from './logo.svg';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img src={logo} className="Header-logo" alt="logo" />
                <h2>Test Header</h2>
            </div>
        );
    }
}

export default Header;
