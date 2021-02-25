# myapp

> Vue Install

> A Vue.js project

```git
# npm installvue-cli 설치 
npm install -g @vue/cli 

#global addon <vue init>
npm install -g @vue/cli-init 

# project Create 
vue init webpack frontend
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


```js
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode : "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
```

install axios
```
npm install axios --save-dev
```
+ mainjs

```js
import axios from 'axios'
Vue.prototype.$http = axios
```