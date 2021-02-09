import React from 'react';
import Logo from '../Logo';
import SearchBar from './components/SearchBar'

const Header = () => {
    return (
        <header className="App-header">
            <nav className="App-Navbar">
                <Logo />
                <SearchBar />
            </nav>
        </header>
    )
};

export default Header;