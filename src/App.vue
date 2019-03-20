<template>
  <div id="app">
     <div v-loading.fullscreen.lock="{text:'加载中...',loading:true}" class="bindCls">demo</div>
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
</style>
