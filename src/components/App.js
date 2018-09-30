import React, { Component } from 'react';
import Home from './Home';
import axios from 'axios';
import { updateFavorites } from '../helpers';
import MyGiphs from './MyGiphs';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      giphs: [],
      favorited: []
    }
  }
  componentDidMount(){
    const query = 'the office';
    this.searchGiph(query);
  }

  favoriteGiph = (giph) => {
    this.setState({ favorited: updateFavorites(giph, this.state.favorited) })
  }

  searchGiph = (query) => {
    const giphyAPI = `http://api.giphy.com/v1/gifs/search?q=`
    const searchQuery = query.split(' ').join('+');
    axios.get(giphyAPI + searchQuery, {params: {api_key: 'U07bCKE95H1U45eiiZWnaTuAfUUA737X'}})
    .then((response)=>{
      let giphs = response.data.data.map(giphObj => ({url: giphObj.embed_url, title: giphObj.title}))
      this.setState({ giphs: giphs.slice(0, 9) })
    })
  }

  render() {
    return (
      <div>
        <Switch>
            <Route
              path='/'
              exact
              component={() => <Home giphs={this.state.giphs} favorited={this.state.favorited} favoriteGiph={this.favoriteGiph} search={this.searchGiph}/>}
            />
            <Route
              path='/mygiphs'
              component={() => <MyGiphs giphs={this.state.favorited} favorited={this.state.favorited} favoriteGiph={this.favoriteGiph}/>}
            />
        </Switch>
      </div>
    );
  }
}

export default App;
