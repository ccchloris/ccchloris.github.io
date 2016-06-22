/**
 * 当浏览器向下滚动时,固定元素在顶部。
 */

import _isNull from 'lodash/isNull'

export default {
  bind () {
    const { el } = this
    const { style } = el
    // let isFixed = false

    let threshold = null

    window.addEventListener('scroll', this.$_h = () => {
      if (_isNull(threshold)) {
        if (window.pageYOffset >= el.offsetTop) {
          threshold = el.offsetTop
          // isFixed = true
          style.position = 'fixed'
          style.top = '0px'
        }
      } else {
        if (window.pageYOffset < threshold) {
          threshold = null
          // isFixed = false
          style.position = 'static'
        }
      }

      // 不能用 $nextTick,此时 el.offsetTop 仍然是 0
      // this.vm.$nextTick(this.$_h)
      setTimeout(this.$_h, 100)
    })
  },
  unbind () {
    window.removeEventListener('scroll', this.$_h)
  }
}
