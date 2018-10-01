import React, { Component } from 'react';
import Home from './Home';
import axios from 'axios';
import MyGiphs from './MyGiphs';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      giphs: []
    }
  }
  componentDidMount(){
    const query = 'the office';
    this.searchGiph(query);
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
        <BrowserRouter>
        <Switch>
            <Route
              path='/'
              exact
              component={() => <Home giphs={this.state.giphs} search={this.searchGiph} />}
            />
            <Route
              path='/mygiphs'
              component={() => <MyGiphs giphs={this.props.favorited} />}
            />
        </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    favorited: state.favorited
  }
}

export default connect(mapStateToProps)(App);
