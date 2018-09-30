import React, { Component } from 'react';
import Home from './Home';
import axios from 'axios';
import { updateFavorites } from '../helpers';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      giphs: [],
      favorited: []
    }
  }
  componentDidMount(){
    const giphyAPI = `http://api.giphy.com/v1/gifs/search?q=animals`
    axios.get(giphyAPI, {params: {api_key: 'U07bCKE95H1U45eiiZWnaTuAfUUA737X'}})
    .then((response)=>{
      let giphs = response.data.data.map(giphObj => ({url: giphObj.embed_url, title: giphObj.title}))
      this.setState({ giphs: giphs.slice(0, 9) })
    })
  }

  favoriteGiph = (giph) => {
    this.setState({ favorited: updateFavorites(giph, this.state.favorited) })
  }

  render() {
    return (
      <div>
        <Home giphs={this.state.giphs} favorited={this.state.favorited} favoriteGiph={this.favoriteGiph}/>
      </div>
    );
  }
}

export default App;
