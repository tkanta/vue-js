import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes }  from './routes';
import store from './store/store';
import axios from 'axios';

Vue.use(VueRouter);

axios.defaults.baseURL='https://axios-backend-d3fe6.firebaseio.com/';

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
