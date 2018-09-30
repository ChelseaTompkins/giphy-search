import React from 'react';
import SearchBar from './SearchBar';
import GiphyDisplay from './GiphyDisplay';

const Home = (props) => {
    return (
        <div>
            <SearchBar search={props.search}/>
            <GiphyDisplay giphs={props.giphs} favorited={props.favorited} favoriteGiph={props.favoriteGiph}/>
        </div>
    )
}

export default Home;