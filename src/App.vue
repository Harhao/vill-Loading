<template>
  <div id="app">
     <div v-loading="true" class="bindCls">全屏覆盖</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app{
  width: 100px;
  height: 1000px;
}
.bindCls{
  width: 700px;
  height: 900px;
  position: relative;
}
</style>
