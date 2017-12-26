import React, { Component } from 'react';

import VideoListItem from './VideoListItem';

class VideoList extends Component {
  renderItems() {
    const videos = this.props.videos;

    if (! videos.length) {
      return 'No videos';
    }

    const videoComponents = videos.map((video) => {
      const { title, thumbnails } = video.snippet;
      const thumbnail = thumbnails.medium.url;
      const id = video.id.videoId;

      return <VideoListItem key={id} title={title} thumbnail={thumbnail} />;
    });

    return videoComponents;
  }

  render() {
    return (
      <div className="video-list">
        { this.renderItems() }
      </div>
    );
  }
};

export default VideoList;