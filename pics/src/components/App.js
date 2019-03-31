import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './searchBar';

class App extends Component {
  onSearchSubmit = (term) => {
    // console.log(term);
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 81b1e9ca9d2fee6dcca85528b4a5739846c4bd0bf4d5c1ee3a89b5d463e91739'
      }
    }).then(res => {
      console.log(res.data.results);
    });
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
      </div>
    )
  }
}

export default App
