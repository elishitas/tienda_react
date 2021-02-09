import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
    return (
        <div className="App-search-bar">
            <input className="search-input" type="search" placeholder="Buscar productos, marcas y más..." />
            <div className="search-icon-box">
                <SearchIcon style={{ color: "rgb(167, 167, 167)" }} fontSize="small" />
            </div>
        </div>
    )
}

export default SearchBar;