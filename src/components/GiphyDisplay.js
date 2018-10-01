import React from 'react';
import Giphy from './Giphy';
import { isFavorited } from '../helpers';
import { connect } from 'react-redux';

const GiphyDisplay = (props) => {
    return (
        <div className="giphy-div-style container row" id="giphy-div-id">
            {
                props.giphs.map(giph => {
                    // props.favorited = [{url: '', title: ''}]
                    // giph = {url: '', title: ''}
                    let favorited = isFavorited(giph, props.favorited);
                    return (<Giphy key={giph.url} giph={giph} favorited={favorited} />);
                })
            }
        </div>
    )
}

let mapStateToProps = state => {
    return {
        favorited: state.favorited
    }
}

export default connect(mapStateToProps)(GiphyDisplay);