import React, { Component } from 'react';
import styles from './SearchBar.css';
import { Link } from 'react-router-dom';

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
                <div className="navbar-brand">Giphy life</div>
                <Link to="/mygiphs"><div className="navbar-brand my-giphs">My Giphs</div></Link>
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