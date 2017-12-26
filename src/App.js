import React, { Component } from 'react';

import './App.css';

import youtubeService from './services/YoutubeService';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedVideos: [],
      loading: false
    };
  }

  componentDidMount() {
    this.searchVideos();
  }

  onSearchSubmit = (term) => {
    this.searchVideos(term);
  }

  searchVideos = (term = '') => {
    this.setState({ loading: true });
    youtubeService.searchVideos(term)
    
      .then(data => {
        this.setState({
          searchedVideos: data,
          loading: false
        });
      });
  }

  renderVideos = () => {
    return this.state.loading ? 'Loading...' : <VideoList videos={this.state.searchedVideos} />;
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h2>Youtube kind of...</h2>
          <SearchBar onSearchSubmit={this.onSearchSubmit} />

          { this.renderVideos() }
        </div>
      </div>
    );
  }
}

export default App;
