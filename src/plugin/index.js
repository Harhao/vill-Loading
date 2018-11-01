import Loading from './loading.vue';
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}
const install = function(Vue,options = {}){
    if (install.installed) return;
    Vue.component(Loading.name,Loading);
    install.installed = true;
};
const vueLoading = {install};
export default vueLoading;