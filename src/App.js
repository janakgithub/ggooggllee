import React, {useState} from 'react'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Routes} from './components/Routes'

export const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    return (
        <div className={darkTheme? 'dark': ''}>
            <Navbar />
            <Routes />
            <Footer />
        </div>
    );
}


