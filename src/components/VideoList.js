import React, { Component } from 'react';

import VideoListItem from './VideoListItem';

class VideoList extends Component {
  constructor(props) {
    super(props);

    this.onParentVideoClick = this.props.onVideoClick ? this.props.onVideoClick : () => {};
  }

  renderItems() {
    const videos = this.props.videos;

    if (! videos.length) {
      return 'No videos';
    }

    const videoComponents = videos.map((video) => {
      const { title, thumbnails, publishedAt, channelTitle } = video.snippet;
      const thumbnail = thumbnails.high.url;
      const id = video.id.videoId;

      return <VideoListItem onVideoClick={this.onVideoClick} key={id} id={id} title={title} thumbnail={thumbnail} publishedAt={publishedAt} channelTitle={channelTitle} />;
    });

    return videoComponents;
  }

  onVideoClick = (id) => {
    this.onParentVideoClick(id);
  };

  render() {
    return (
      <div className="video-list">
        { this.renderItems() }
      </div>
    );
  }
};

export default VideoList;