import React from 'react';
import Giphy from './Giphy';

const GiphyDisplay = (props) => {
    return (
        <div className="giphy-div-style container row" id="giphy-div-id">
            {
                props.giphs.map(giph => <Giphy key={giph.url} giph={giph}/>)
            }
        </div>
    )
}

export default GiphyDisplay;