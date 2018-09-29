import React from 'react';
import SearchBar from './SearchBar';
import GiphyDisplay from './GiphyDisplay';

const Home = (props) => {
    return (
        <div>
            <SearchBar />
            <GiphyDisplay urls={props.urls}/>
        </div>
    )
}

export default Home;