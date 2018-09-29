import React, { Component } from 'react';
import Home from './Home';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      giphs: []
    }
  }
  componentDidMount(){
    const giphyAPI = `http://api.giphy.com/v1/gifs/search?q=kittens`
    axios.get(giphyAPI, {params: {api_key: 'U07bCKE95H1U45eiiZWnaTuAfUUA737X'}})
    .then((giphs)=>{
      this.setState({ giphs: giphs.data.data.map(giphObj => giphObj.embed_url) })
    })
  }

  render() {
    return (
      <div>
        <Home urls={this.state.giphs}/>
      </div>
    );
  }
}

export default App;
