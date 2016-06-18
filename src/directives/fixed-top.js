/**
 * 当浏览器向下滚动时,固定元素在顶部。
 * 因为给 html 和 body 都设置了 height: 100%,
 * 所以 window.pageYOffset 永远都是 0,
 * 只能通过 body 下的第一个子元素的 top 值(而且这个值不是0就是一个负数)来判断当前滚动了多少
 */

const { body } = document
export default {
  bind () {
    const { el } = this
    let isFixed = false

    body.addEventListener('scroll', this.$_h = () => {
      if (!isFixed) {
        if (el.getBoundingClientRect().top <= 0) {
          isFixed = true
          el.style.position = 'fixed'
          el.style.top = '0px'
        }
      } else {
        const { firstElementChild } = body
        if (firstElementChild.getBoundingClientRect().top >= -firstElementChild.offsetHeight) {
          isFixed = false
          el.style.position = 'static'
        }
      }
    })
  },
  unbind () {
    body.removeEventListener('scroll', this.$_h)
  }
}
