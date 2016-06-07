import 'babel-polyfill'

// 这里不能使用 'promise.prototype.finally' 这个模块,
// 因为那个模块将 finally 加在了 window.Promise 上,
// 但因为项目使用了 transform-runtime 插件,
// 所以 babel-polyfill 没有将内建的 Promise 发布为全局变量,
// 这就导致代码里的 Promise.prototype.finally 是 undefined
// @see http://babeljs.io/docs/plugins/transform-runtime/
// import 'promise.prototype.finally'
// eslint-disable-next-line no-extend-native
Promise.prototype.finally = function (callback) {
  return this.then(value => {
    return Promise.resolve(callback()).then(() => value)
  }, reason => {
    return Promise.resolve(callback()).then(() => {
      throw reason
    })
  })
}

import Vue from 'vue'
import globalComponents from './components/install'
import globalDirectives from './directives/install'

Vue.use(globalComponents)
Vue.use(globalDirectives)

// 启动 app
import router from './pages/router'
router.start(require('./pages/_root.vue'), 'app')

// 消除移动端 300ms 的点击延迟
import fc from 'fastclick'
fc.attach(document.body)
