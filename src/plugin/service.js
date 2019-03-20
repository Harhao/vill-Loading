import Vue from "vue";
import Loading from "./loading.vue";
const LoadingConstrutor = Vue.extend(Loading);
let fullscreenLoading;
LoadingConstrutor.prototype.close = function() {
  setTimeout(() => {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
      this.$destroy();
    }
  }, 3000);
};
const loading = (options = {})=>{
    if(options.fullscreen &&fullscreenLoading){
        return fullscreenLoading;
    }
    let instance = new LoadingConstrutor({
        el:document.createElement('div'),
        data:options
    });
    let parent = document.body;
    parent.appendChild(instance.$el);
    Vue.nextTick(()=>{
        instance.closed = true;
    });
    if(options.fullscreen){
        fullscreenLoading = instance;
    }
    return instance;
} 
export default loading;