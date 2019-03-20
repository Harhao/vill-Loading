import Vue from "vue";
import Loading from "./loading.vue";
const Mask = Vue.extend(Loading);
const loadingDirective = {};
loadingDirective.install = Vue => {
  const toggleLoading = (el, binding) => {
    if (binding.value.loading) {
      if (binding.modifiers.fullscreen) {
        insertdom(document.body, el, binding);
      }
      insertdom(el, el, binding);
    } else {
      el.dom.closed = false;
    }
  };
  const insertdom = (parent, el, binding) => {
    if (binding.modifiers.lock) {
      parent.style.overflow = "hidden";
    }
    el.dom.closed = true;
    parent.appendChild(el.mask);
  };
  Vue.directive("loading", {
    bind: function(el, binding, vnode) {
      const mask = new Mask({
        el: document.createElement("div"),
        // data会与loading.vue里面data数据进行合并
        data: {
          fullscreen: !!binding.modifiers.fullscreen,
          tips: binding.value.text
        }
      });
      el.dom = mask;
      // 如果上面的mask实例中没有提供已经存在el字段，则需要手动进行挂载dom元素，使用这句代码 el.mask = mask.$mount().$el;
      el.mask = mask.$el;
      binding.value && toggleLoading(el, binding);
    },
    update: function(el, binding) {
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },
    unbind: function(el, binding) {
      el.dom && el.dom.$destroy();
    }
  });
};

export default loadingDirective;
