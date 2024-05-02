// router/index.js

import Vue from 'vue';
import Router from 'vue-router';

// Import your components
import NotFound from '@/views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // Your other routes
    {
      path: '*',
      component: NotFound,
    },
  ],
});
