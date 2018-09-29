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
    const giphyAPI = `http://api.giphy.com/v1/gifs/search?q=animals`
    axios.get(giphyAPI, {params: {api_key: 'U07bCKE95H1U45eiiZWnaTuAfUUA737X'}})
    .then((response)=>{
      let giphs = response.data.data.map(giphObj => ({url: giphObj.embed_url, title: giphObj.title}))
      this.setState({ giphs: giphs.slice(0, 9) })
    })
  }

  render() {
    return (
      <div>
        <Home giphs={this.state.giphs} />
      </div>
    );
  }
}

export default App;
