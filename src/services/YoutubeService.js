import YTSearchAPI from 'youtube-api-search';
import config from '../config';

class YoutubeService {
  /**
   * Searches Youtube videos with provided term
   * @param {string} term 
   * @returns {Promise<Array>}
   */
  searchVideos(term) {
    return new Promise((resolve) => {
      YTSearchAPI({
        key: config.apiKey,
        term
      }, (data) => {
        resolve(data);
      });
    });
  }
}

const youtubeService = new YoutubeService();

export default youtubeService;