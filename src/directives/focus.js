/**
 * @files 一个 Vue 指令,用于让元素获取焦点
 */

import _hasIn from 'lodash/hasIn'
export default {
  bind () {
    setTimeout(() => {
      _hasIn(this, 'el.focus') && this.el.focus()
    }, 0)
  }
}
