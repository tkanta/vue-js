import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);

axios.defaults.baseURL = 'https://axios-backend-d3fe6.firebaseio.com';
//axios.defaults.headers.common['Authorization'] = 'ASDFK';
axios.defaults.headers.get['Accepts'] = 'application/json';

const requestInt = axios.interceptors.request.use(config =>{
  console.log('Request Interceptor', config);  
  return config;
})

const responseInt = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res);
  return res;
})

axios.interceptors.request.eject(requestInt);
axios.interceptors.response.eject(responseInt);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
