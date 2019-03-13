# vill-loading

> a vue plugins about notice or toast

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

### on the vue template file ,you can use it by the follow structor and the table parent element should be seting the style to relative

```
<table style="position:relative">
    <loading :closed="true"/>
</table>
```
## License
[MIT](http://opensource.org/licenses/MIT)