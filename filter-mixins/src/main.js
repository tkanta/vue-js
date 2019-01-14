import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLower', (value) => {
  return value.toLowerCase();
});

Vue.mixin({
  created(){
    console.log('Global mixin hook.')
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
