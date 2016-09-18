// 配置项
const BACK_URL_PREFIX = '/wtf'

import Vue from 'vue'
import VueRouter from 'vue-router'
import globalComponents from '../components/_install'
import globalDirectives from '../directives/_install'
import globalFilters from '../filters/_install'

Vue.use(WildVue)
Vue.use(VueRouter)
Vue.use(globalComponents)
Vue.use(globalDirectives)
Vue.use(globalFilters)

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
      '/post/:id': {
        name: '文章详情',
        component: require('./front/detail.vue')
      },
      '/images': {
        name: '图片列表',
        component: require('./front/images-list.vue')
      },
      '/image': {
        name: '图片',
        component: require('./front/image.vue')
      },
      '/tl': {
        name: '文字生活',
        component: require('./front/text-life.vue')
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
      '/blog': {
        component: require('./back/blog/_root.vue'),
        subRoutes: {
          '/': {
            name: '后台文章列表',
            component: require('./back/blog/list.vue')
          },
          '/create': {
            name: '写文章',
            component: require('./back/blog/new-blog.vue')
          },
          '/edit/:id': {
            name: '编辑文章',
            component: require('./back/blog/new-blog.vue')
          }
        }
      }
    }
  }
})

import api from '../services/api'
// 以 `BACK_URL_PREFIX` 开头的路径都需要用户已登录
router.beforeEach(({ to, next, redirect }) => {
  const { path } = to
  if (path.startsWith(BACK_URL_PREFIX) && !api.isSignIn()) {
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
