import React from 'react';
import styles from './Giphy.css';

const Giphy = (props) => {
    return (
        <div className={"col col-lg-4 col-md-6 col-sm-12 " + styles.giphy}>
            <div><iframe title={props.url} src={props.url}></iframe></div>
        </div> 
    )
}

export default Giphy;