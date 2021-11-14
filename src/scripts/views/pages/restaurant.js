/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
        <section tabindex="0" class="content" id="content">
            <div class="latest">
                <h3 class="latest__label">List Restaurant</h3>
                <div class="lists" id="lists"></div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurants();
    const restaurantsContainer = document.querySelector('#lists');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurant;
