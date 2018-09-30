import React, { Component } from 'react';
import styles from './SearchBar.css';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            search: ''
        }
    }

    clickHandler = (event) => {
        event.preventDefault();
        this.props.search(this.state.search);
    }
    render(){
        return (
            <nav className={"navbar navbar-light bg-light " + styles.nav}>
                <a className="navbar-brand">Giphy life</a>
                <a href="mygiphs.html">My Giphs</a>
                <form className="form-inline" onSubmit={this.clickHandler}>
                    <input 
                        id="search-input" 
                        className="form-control mr-sm-2"
                        value={this.state.search} 
                        onChange={(event)=> this.setState({search: event.target.value})}
                        type="search" 
                        placeholder="Search GIPHY" 
                        aria-label="Search" />
                    <button 
                        id="search-button" 
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit">
                        Search</button>
                </form>
            </nav>
        )
    }
    
}

export default SearchBar;