/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-shadow */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';
 
const Like = {
  async render() {
    return `
        <section tabindex="0" class="content" id="content">
            <div class="latest">
                <h3 class="latest__label">Liked Restaurant</h3>
                <div class="lists" id="lists"></div>
            </div>
        </section>
    `;
  },
 
  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#lists');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
 
export default Like;
