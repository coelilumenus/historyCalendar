import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import { HistoryPage, EcologyPage, SportPage, ArtPage, SciencePage } from '../pages';
import OnScroll from '../services/scroll';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './app.css';

const App = () => {

    const [location, listenLocation] = useState([]);
    
    useEffect(() => {
        OnScroll();
    }, [location.key]);
    
    
    let bgName;
    if (!location.pathname || location.pathname.length < 2) {
        bgName = 'history'
    } else {
        bgName = `${location.pathname.slice(1)}`
    }
    
    return (
        <>
            <div className={bgName}>
                <Router>
                    <Header listenLocation={listenLocation} />
                    <Route path="/ecology">
                        <EcologyPage />
                    </Route>
                    <Route path="/sport">
                        <SportPage />
                    </Route>
                    <Route path="/art">
                        <ArtPage />
                    </Route>
                    <Route path="/science">
                        <SciencePage />
                    </Route>
                    <Route exact path="/">
                        <HistoryPage />
                    </Route>
                </Router>
            </div>
        </>
    )
}

export default App;