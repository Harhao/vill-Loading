import Vue from 'vue'
import App from './App.vue'
import directives from '../src/plugin/index.js';
Vue.use(directives);
// Vue.use(vueLoading);
new Vue({
  el: '#app',
  render: h => h(App)
})
