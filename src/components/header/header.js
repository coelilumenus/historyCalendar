import React from 'react';
import './header.css'

const Header = () => {
    return (
    <header class="container">
        <nav class="nav-items">
            <a href="/historyCalendar/index.html" class="nav-item _active">История</a>
            <a href="/historyCalendar/ecology.html" class="nav-item">Экология</a>
            <a href="/historyCalendar/sport.html" class="nav-item">Спорт</a>
            <a href="/historyCalendar/art.html" class="nav-item">Искусство</a>
            <a href="/historyCalendar/science.html" class="nav-item">Наука</a>
        </nav>
    </header>
    )
}

export default Header;