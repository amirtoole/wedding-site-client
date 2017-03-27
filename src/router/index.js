import Vue from 'vue';
import Router from 'vue-router';

const Home = (r) => require.ensure([], () => r(require('../pages/Home')), 'base');
const RSVP = (r) => require.ensure([], () => r(require('../pages/RSVP')), 'base');
const Error404 = (r) => require.ensure([], () => r(require('../pages/Error')), 'base');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: RSVP
    },
    {
      path: '*',
      name: 'error',
      component: Error404
    }
  ]
});
