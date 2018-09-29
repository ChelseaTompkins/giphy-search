import React from 'react';
import Giphy from './Giphy';

const GiphyDisplay = (props) => {
    return (
        <div className="giphy-div-style container row" id="giphy-div-id">
            {
                props.urls.map(url => <Giphy key={url} url={url}/>)
            }
        </div>
    )
}

export default GiphyDisplay;