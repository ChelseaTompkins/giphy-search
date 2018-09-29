import React from 'react';
import SearchBar from './SearchBar';
import GiphyDisplay from './GiphyDisplay';

const Home = (props) => {
    return (
        <div>
            <SearchBar />
            <GiphyDisplay giphs={props.giphs}/>
        </div>
    )
}

export default Home;