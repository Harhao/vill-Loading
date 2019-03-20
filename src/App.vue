<template>
  <div id="app">
     <div v-loading="{text:'加载中...',loading:true}" class="bindCls">demo</div>
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
  width: 100vw;
  height: 100vh;
  .bindCls{
    width: 500px;
    height: 500px;
  }
}
</style>
