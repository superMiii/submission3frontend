/* eslint-disable linebreak-style */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createPageLoaderTemplate,
  createMenusRestaurantOnDetailTemplate,
  createRestaurantDetailTemplate,
  createReviewRestaurantOnDetailTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
        ${document.querySelector('#mainContent').innerHTML = createPageLoaderTemplate.show()}
        <section class="content" id="content">
            <div class="latest">
                <h3 class="latest__label">Detail</h3>
                <div class="lists-detail" id="list"></div>
                <div class="lists-detail review">
                  <h5 class="menus__foods">Review</h5>
                  <article class="review" id="review"></article>
                </div>
            </div>
        </section>
        <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#list');
    restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant.restaurant);
    // menus Foods
    const { menus } = restaurant.restaurant;
    const menusFoodsContainer = document.querySelector('#foods');
    menus.foods.forEach((resto) => {
      menusFoodsContainer.innerHTML += createMenusRestaurantOnDetailTemplate(resto);
    });
    // menus drinks
    const menusDrinksContainer = document.querySelector('#drinks');
    menus.drinks.forEach((resto) => {
      menusDrinksContainer.innerHTML += createMenusRestaurantOnDetailTemplate(resto);
    });
    // reviews
    const reviews = restaurant.restaurant.customerReviews;
    const reviewContainer = document.querySelector('#review');
    reviews.forEach((review) => {
      reviewContainer.innerHTML += createReviewRestaurantOnDetailTemplate(review);
    });
    // like button
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
      },
    });
    createPageLoaderTemplate.remove();
  },
};

export default Detail;
