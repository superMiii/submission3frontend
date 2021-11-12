/* eslint-disable linebreak-style */
import Restaurant from '../views/pages/restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Restaurant,
  '/restaurant': Restaurant,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
