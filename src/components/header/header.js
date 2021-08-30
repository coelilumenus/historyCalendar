import React from 'react';
import './header.css'

const Header = () => {
    return (
    <header className="container">
        <nav className="nav-items">
            <a href="/historyCalendar/index.html" className="nav-item _active">История</a>
            <a href="/historyCalendar/ecology.html" className="nav-item">Экология</a>
            <a href="/historyCalendar/sport.html" className="nav-item">Спорт</a>
            <a href="/historyCalendar/art.html" className="nav-item">Искусство</a>
            <a href="/historyCalendar/science.html" className="nav-item">Наука</a>
        </nav>
    </header>
    )
}

export default Header;