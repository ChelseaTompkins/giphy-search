import React from 'react';
import styles from '../style/Giphy.css';

const Giphy = (props) => {

    let clickHandler = () => {
        props.favoriteGiph(props.giph)
    }
    let heart = props.favorited ? '❤️' : '💔';
    return (
        <div className={"col col-lg-4 col-md-6 col-sm-12 " + styles.giphy}>
            <iframe title={props.giph.title} src={props.giph.url}></iframe>
            <p>{props.giph.title} <span onClick={clickHandler}>{heart}</span></p>
            
        </div> 
    )
}

export default Giphy;