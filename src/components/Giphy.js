import React from 'react';
import styles from './Giphy.css';

const Giphy = (props) => {
    return (
        <div className={"col " + styles.giphy}>
            <div className="col-lg-4 col-md-6 col-sm-12"><iframe title={props.url} src={props.url}></iframe></div>
        </div> 
    )
}

export default Giphy;