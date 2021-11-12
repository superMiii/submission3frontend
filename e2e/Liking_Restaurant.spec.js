const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.list-item__name a');

  const firstRestaurant = locate('.list-item__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.list-item');
  const likedRestaurantName = await I.grabTextFrom('.list-item__name a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  // like dulu satu restaurant untuk melakukan unliking
  I.amOnPage('/');
  I.seeElement('.list-item__name a');
  const firstRestaurant = locate('.list-item__name a').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // proses unliking
  I.amOnPage('/#/like');
  I.seeElement('.list-item__name a');
  const firstLikedRestaurant = locate('.list-item__name a').first();
  const firstLikedRestaurantName = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  I.seeElement('.list-item__name');
  const likedRestaurantName = await I.grabTextFrom('.list-item__name');
  assert.strictEqual(firstLikedRestaurantName, likedRestaurantName);

  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  // cek page like untuk memastikan restaurant sudah di unlike
  I.amOnPage('/#/like');
});
