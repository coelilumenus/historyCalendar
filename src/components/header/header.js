import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import './header.css'

const Header = ({ listenLocation }) => {

    let location = useLocation();

    return (
        <header className="container">
            <nav
                onClick={() => { listenLocation(location) }}
                className="nav-items">
                <NavLink to="/" className="nav-item _active">История</NavLink>
                <NavLink to="/ecology" className="nav-item">Экология</NavLink>
                <NavLink to="/sport" className="nav-item">Спорт</NavLink>
                <NavLink to="/art" className="nav-item">Искусство</NavLink>
                <NavLink to="/science" className="nav-item">Наука</NavLink>
            </nav>
        </header>
    )
}

export default Header;