<template>
    <svg class="load" viewBox="25 25 50 50">
        <circle class="loading" cx="50" cy="50" r="20" fill="none" />
    </svg>
</template>
<script>
    export default {
      name:'Loading',
      data(){
        return {}
      }
    }
</script>
<style lang="scss" scoped>
.load {
  width: 80px;
  height: 80px;
  animation: rotate 2s linear infinite;
}
.loading {
  stroke: rgb(53, 157, 218);
  stroke-width: 3;
  fill: none;
  animation: dash 1.5s linear infinite;
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
