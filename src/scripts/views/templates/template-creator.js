/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <article class="list-item">
    <img class="list-item__thumbnail"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
            alt="Gambar Restaurant ${restaurant.name}">
    <div class="list-item__content">
    <div class="resto__city">
            <p class="list-item__city" tabindex="0">${restaurant.city}</p>
            </div>
            <p class="list-item__rating" tabindex="0">Rating: ${restaurant.rating} <span>★</span></p>
            <h4 class="list-item__name" tabindex="0">${restaurant.name}</h4>
            <p class="list-item__address" tabindex="0">${restaurant.address}</p>
            <p class="list-item__description" tabindex="0">${restaurant.description}</p>
    </div>
    </article>
    <article class="list-item">
        <h5 class="menus__foods" tabindex="0">Menus Foods</h5>
        <div class="list-item__content" id="foods"></div>
        <h5 class="menus__foods" tabindex="0">Menus Drinks</h5>
        <div class="list-item__content" id="drinks"></div>
    </article>
`;

const createMenusRestaurantOnDetailTemplate = (menus) => `
    <p class="list-item__menus" tabindex="0">${menus.name}</p>
    `;

const createReviewRestaurantOnDetailTemplate = (review) => `
    <div class="list-review">
        <p class="list-item__review" tabindex="0">${review.name}</p>
        <p class="list-item__review" tabindex="0">${review.review}</p>
        <p class="list-item__review" tabindex="0">${review.date}</p>
    </div>
`;

const createRestaurantItemTemplate = (restaurants) => `
    <article class="list-item">
    <img class="lazyload list-item__thumbnail"
            data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}"
            alt="Gambar Restaurant ${restaurants.name}">
    <div class="list-item__content">
        <div class="resto__city">
            <p class="list-item__city" tabindex="0">${restaurants.city}</p>
        </div>
        <p class="list-item__rating" tabindex="0">Rating: ${restaurants.rating} <span>★</span></p>
        <h4 class="list-item__name"><a href="${`#/detail/${restaurants.id}`}" tabindex="0">${restaurants.name}</a></h4>
        <p class="list-item__description" tabindex="0">${restaurants.description}</p>
    </div>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createPageLoaderTemplate = {
  show() {
    return `
      <div class="page-loader"></div>
    `;
  },
  remove() {
    document.querySelector('.page-loader').remove();
  },
};

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createMenusRestaurantOnDetailTemplate,
  createReviewRestaurantOnDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createPageLoaderTemplate,
};
