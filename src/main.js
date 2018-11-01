import Vue from 'vue'
import App from './App.vue'
import vueLoading from '../dist/vue-loading';
Vue.use(vueLoading);
new Vue({
  el: '#app',
  render: h => h(App)
})
