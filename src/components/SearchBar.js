import React from 'react';
import styles from './SearchBar.css';

const SearchBar = () => {
    return (
        <nav className={"navbar navbar-light bg-light " + styles.nav}>
            <a className="navbar-brand">Giphy life</a>
            <a href="mygiphs.html">My Giphs</a>
            <form className="form-inline">
                <input id="search-input" className="form-control mr-sm-2" type="search" placeholder="Search GIPHY" aria-label="Search" />
                <button id="search-button" className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

export default SearchBar;