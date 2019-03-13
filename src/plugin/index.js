import Loading from "./loading.vue";
export default {
  install(Vue, options = {}) {
    Vue.component(Loading.name, Loading);
  }
};
