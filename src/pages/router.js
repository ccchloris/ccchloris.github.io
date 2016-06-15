// 配置项
const BACK_URL_PREFIX = '/wtf'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  // 供普通用户浏览的页面
  '/': {
    component: require('./front/_root.vue'),
    subRoutes: {
      '/': {
        name: '首页',
        component: require('./front/index.vue')
      },
      '/list': {
        name: '博客列表',
        component: require('./front/list.vue')
      }
    }
  },

  '/sign-in': {
    name: '登录',
    component: require('./sign-in.vue')
  },

  [BACK_URL_PREFIX]: {
    component: require('./back/_root.vue'),
    subRoutes: {
      '/': {
        name: '后台首页',
        component: require('./back/index.vue')
      },
      '/new-blog': {
        name: '写文章',
        component: require('./back/new-blog.vue')
      },
      '/edit-blog/:id': {
        name: '编辑文章',
        component: require('./back/new-blog.vue')
      }
    }
  }
})

import store from '../vuex/store'
import { hasSigned } from '../vuex/actions'
// 以 /mylover 开头的路径都需要用户已登录
router.beforeEach(({ to, next, redirect }) => {
  const { path } = to
  if (path.startsWith(BACK_URL_PREFIX) && !hasSigned(store)) {
    redirect({
      name: '登录',
      query: {
        go: path
      }
    })
    return
  }
  next()
})

router.redirect({
  '*': '/404'
})

export default router
