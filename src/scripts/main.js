/* eslint-disable linebreak-style */
import data from '../DATA.json';

const renderAllData = () => {
  const listRestaurant = document.querySelector('.lists');
  data.restaurants.forEach((resto) => {
    listRestaurant.innerHTML += `
            <article class="list-item">
                <img class="list-item__thumbnail"
                        src="${resto.pictureId}"
                        alt="Gambar Restaurant ${resto.name}">
                <div class="list-item__content">
                    <div class="resto__city">
                        <p class="list-item__city" tabindex="0">${resto.city}</p>
                    </div>
                    <p class="list-item__rating" tabindex="0">Rating: ${resto.rating} <span>★</span></p>
                    <h4 class="list-item__name"><a href="#" tabindex="0">${resto.name}</a></h4>
                    <p class="list-item__description" tabindex="0">${resto.description}</p>
                </div>
            </article>
        `;
  });
};

export default renderAllData;
