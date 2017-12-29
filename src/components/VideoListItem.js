import React, { Component } from 'react';
import moment from 'moment';

class VideoListItem extends Component {
  onVideoClick = () => {
    if (this.props.onVideoClick) {
      this.props.onVideoClick(this.props.id);
    }
  }

  render() {
    const { thumbnail, title, publishedAt, channelTitle } = this.props;

    const timeAgo = moment(publishedAt).fromNow();
  
    return (
      <div className="video-list-item" onClick={this.onVideoClick}>
        <div className="video-list-item__thumbnail">
          <img src={thumbnail} alt={title}/>
        </div>
  
        <div className="video-list-item__title">
          <h5>{title}</h5>
          <h6>{channelTitle}, {timeAgo}</h6>
        </div>
      </div>
    );
  }
}

export default VideoListItem;