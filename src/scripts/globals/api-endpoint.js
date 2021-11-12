/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT: `${CONFIG.BASE_URL}list`,
  SEARCH: (keyword) => `${CONFIG.BASE_URL}search/q=${keyword}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
