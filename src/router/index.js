import Vue from 'vue'
import VueRouter from 'vue-router'
import Editor from '../views/Editor.vue'
import Preview from '../views/Preview.vue'
import Guide from '../views/Guide.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'editor',
    component: Editor
  },
  {
    path: '/guide',
    name: 'guide',
    component: Guide
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
