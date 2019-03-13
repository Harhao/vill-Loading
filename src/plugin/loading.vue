<template>
    <div :class="[prefixCls +'-wrap']" v-show="closed">
        <svg :class="prefixCls" viewBox="25 25 50 50">
            <circle :class="[prefixCls+'-circle']" cx="50" cy="50" r="20" fill="none" />
        </svg>
        <span class="tips"><slot ></slot></span>
    </div>
</template>

<script>
const prefixCls = "vill-loading";
export default {
  name: "vill-loading",
  data() {
    return {
      prefixCls: prefixCls
    };
  },
  props: {
    closed: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.vill-loading-wrap {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999;
  & .vill-loading {
    width: 40px;
    height: 40px;
    animation: rotate 2s linear infinite;
    .vill-loading-circle {
      stroke: #000000;
      stroke-width: 2;
      fill: none;
      animation: dash 1.5s linear infinite;
    }
  }
  & .tips {
    margin-top: 20px;
    font-size: 14px;
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 130, 200;
    stroke-dashoffset: -50;
  }
  100% {
    stroke-dasharray: 130, 200;
    stroke-dashoffset: -188;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
