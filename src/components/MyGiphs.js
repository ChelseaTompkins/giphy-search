import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MyGiphs.css';
import GiphyDisplay from './GiphyDisplay';

const MyGiphs = (props) => {
    return (
        <div>
            <nav className={"navbar navbar-light bg-light " + styles.nav}>
                <div className="navbar-brand">My giphs</div>
                <Link to="/"><div className="navbar-brand my-giphs"><i className="fas fa-arrow-left"></i></div></Link>
            </nav>

            <GiphyDisplay giphs={props.giphs} favorited={props.favorited} favoriteGiph={props.favoriteGiph} />
        </div>
    )
}

export default MyGiphs;