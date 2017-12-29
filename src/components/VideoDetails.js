import React from 'react';

const VideoDetails = ({ title, channelName, videoId }) => {
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-details">
      <div className="video-details__video embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" title={title} src={url} frameBorder="0"></iframe>
      </div>

      <h2>{title}</h2>

      <p>{channelName}</p>
    </div>
  );
};

export default VideoDetails;