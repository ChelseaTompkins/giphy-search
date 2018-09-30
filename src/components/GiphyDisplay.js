import React from 'react';
import Giphy from './Giphy';
import { isFavorited } from '../helpers';

const GiphyDisplay = (props) => {
    return (
        <div className="giphy-div-style container row" id="giphy-div-id">
            {
                props.giphs.map(giph => {
                    // props.favorited = [{url: '', title: ''}]
                    // giph = {url: '', title: ''}
                    let favorited = isFavorited(giph, props.favorited);
                    return (<Giphy key={giph.url} giph={giph} favorited={favorited} favoriteGiph={props.favoriteGiph}/>);
                })
            }
        </div>
    )
}

export default GiphyDisplay;