import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'
import Board from '@/components/Board'
Vue.use(Router)

export default new Router({
  mode :"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/board',
      name: 'Board',
      component: Board
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {//추가
      path: '/todos',
      name: 'TodoPage',
      component: TodoPage
    }
  ]
})
