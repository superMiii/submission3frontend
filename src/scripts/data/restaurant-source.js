/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async searchRestaurant(keyword) {
    const response = await fetch(API_ENDPOINT.SEARCH(keyword));
    const responseJson = await response.json();
    return responseJson.json();
  }
}

export default RestaurantSource;
