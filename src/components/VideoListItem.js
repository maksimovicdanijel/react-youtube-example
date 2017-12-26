import React from 'react';

const VideoListItem = ({ thumbnail, title, channel }) => {
  return (
    <div className="video-list-item">
      <div className="video-list-item__thumbnail">
        <img src={thumbnail} alt={title}/>
      </div>

      <div className="video-list-item__title">
        <h5>{title}</h5>
      </div>
    </div>
  );
};

export default VideoListItem;