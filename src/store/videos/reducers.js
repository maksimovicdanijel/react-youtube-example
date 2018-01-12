import Immutable from 'seamless-immutable';

import types from './actionTypes';
import YoutubeService from '../../services/YoutubeService';

const initialState = Immutable({
  searchTerm: '',
  searchedVideos: [],
  selectedVideo: null,
  loading: false
});

const videos = (state = initialState, action = {}) => {
  switch(action.type) {
    case types.SEARCH_VIDEOS:

      state.merge({ loading: true });
      
      YoutubeService.searchVideos(action.title)
      
        .then((data) => {
          state.merge({
            searchedVideos: data,
            loading: false,
            selectedVideo: data.length ? data[0] : null
          });

          return state;
        });
    default:
      return state;
  }
};

export default videos;