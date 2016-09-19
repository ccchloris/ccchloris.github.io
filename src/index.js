import './assets/fontello/css/fontello.css'

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

// 启动 app
import router from './pages/router'
router.start(require('./pages/_root.vue'), 'app')

// 消除移动端 300ms 的点击延迟
import fc from 'fastclick'
fc.attach(document.body)
