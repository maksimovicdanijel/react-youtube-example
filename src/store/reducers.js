import { combineReducers } from 'redux';

import videos from './videos/reducers';

const youtubeApp = combineReducers({
  videos
});

export default youtubeApp;