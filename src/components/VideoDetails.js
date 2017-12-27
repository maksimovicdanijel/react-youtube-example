import React from 'react';

const VideoDetails = ({ title, channelName, url }) => {
  return (
    <div className="video-details">
      video comes here

      <h2>{title}</h2>

      <p>{channelName}</p>
    </div>
  );
};

export default VideoDetails;