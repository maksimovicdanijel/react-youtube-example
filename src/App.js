import React, { Component } from 'react';

import './App.css';

import youtubeService from './services/YoutubeService';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedVideos: [],
      selectedVideo: null,
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
        let selectedVideo = data.length ? data[0] : null;

        this.setState({
          searchedVideos: data,
          loading: false,
          selectedVideo
        });
      });
  }

  renderVideos = () => {
    return this.state.loading ? 'Loading...' : <VideoList videos={this.state.searchedVideos} />;
  }

  renderVideoDetails = () => {
    if (this.state.loading) {
      return 'Loading...';
    }

    if (! this.state.selectedVideo) {
      return 'No video selected';
    }

    let title = this.state.selectedVideo.snippet.title;
    let channelName = this.state.selectedVideo.snippet.channelTitle;

    return <VideoDetails title={title} channelName={channelName} />;
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h2>Youtube kind of...</h2>

          <div className="search-bar-container" style={{marginBottom: "40px"}}>
            <SearchBar onSearchSubmit={this.onSearchSubmit} />
          </div>

          <div className="row">
            <div className="col-sm-8">
              {this.renderVideoDetails()}
            </div>
              
            <div className="col-sm-4">
              { this.renderVideos() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
