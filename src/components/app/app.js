import React, { useEffect } from 'react';
import Header from '../header/header';
import { HistoryPage, EcologyPage, SportPage, ArtPage, SciencePage } from '../pages';
import OnScroll from '../services/scroll';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {

    useEffect(() => {
        OnScroll();
    });


    return (
        <>
            <Header />
            <Router>
                <Switch>
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
                    <Route path="/">
                        <HistoryPage />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;