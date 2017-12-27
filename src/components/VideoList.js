import React, { Component } from 'react';

import VideoListItem from './VideoListItem';

class VideoList extends Component {
  renderItems() {
    const videos = this.props.videos;

    if (! videos.length) {
      return 'No videos';
    }

    const videoComponents = videos.map((video) => {
      const { title, thumbnails, publishedAt, channelTitle } = video.snippet;
      const thumbnail = thumbnails.high.url;
      const id = video.id.videoId;

      return <VideoListItem key={id} title={title} thumbnail={thumbnail} publishedAt={publishedAt} channelTitle={channelTitle} />;
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