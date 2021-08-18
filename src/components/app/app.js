import React, { useEffect } from 'react';
import Header from '../header/header';
import { HistoryPage } from '../pages';
import OnScroll from '../services/scroll';

const App = () => {

    useEffect(() => {
        OnScroll();
    });


    return (
        <>
            <Header />
            <HistoryPage />
        </>
    )
}

export default App;