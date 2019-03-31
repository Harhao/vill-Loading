# vill-loading

> a vue plugins about notice or toast modal


## Build Setup

### install the plugin on bash and the sass module support

```
npm install vill-loading --save-dev
npm install sass-loader node-sass vue-style-loader --save-dev
```

### register the plugins on the vue project in the entry file (main.js)

```
import loading from 'vill-loading'
Vue.use(loading);
```

### on the vue template file ,you can use it by the follow example

```
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

```

| 字段      | 说明              | 类型    | 默认值 |
| --------- | ----------------- | ------- | ------ |
| fullscreen | 修饰符全屏loading| - | -      |
| lock | 修饰符全屏loading不可滚动)| - | -      |
| text | loading的提示文字| string | -      |
| loading | 控制loading的显隐| boolean | -      |

### demo
![demo](https://github.com/Harhao/vill-Loading/blob/master/src/assets/demo.gif)

## License

[MIT](http://opensource.org/licenses/MIT)
