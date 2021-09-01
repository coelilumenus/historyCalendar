import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import './header.css'

const Header = ({ listenLocation }) => {

    let location = useLocation();

    return (
        <header className="container">
            <nav
                onClick={listenLocation(location)} // call without arrow-function because trying fix problem with location-data
                className="nav-items">
                <NavLink exact to="/" className="nav-item" activeClassName="nav-item__active">История</NavLink>
                <NavLink to="/ecology" className="nav-item" activeClassName="nav-item__active">Экология</NavLink>
                <NavLink to="/sport" className="nav-item" activeClassName="nav-item__active">Спорт</NavLink>
                <NavLink to="/art" className="nav-item" activeClassName="nav-item__active">Искусство</NavLink>
                <NavLink to="/science" className="nav-item" activeClassName="nav-item__active">Наука</NavLink>
            </nav>
        </header>
    )
}

export default Header;