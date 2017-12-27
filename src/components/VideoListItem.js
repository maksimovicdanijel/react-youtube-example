import React from 'react';
import moment from 'moment';

const VideoListItem = ({ thumbnail, title, publishedAt, channelTitle }) => {
  const timeAgo = moment(publishedAt).fromNow();

  return (
    <div className="video-list-item">
      <div className="video-list-item__thumbnail">
        <img src={thumbnail} alt={title}/>
      </div>

      <div className="video-list-item__title">
        <h5>{title}</h5>
        <h6>{channelTitle}, {timeAgo}</h6>
      </div>
    </div>
  );
};

export default VideoListItem;