import types from './actionTypes';

export const searchVideos = (title) => {
  return {
    type: types.SEARCH_VIDEOS,
    title
  }
};