import focus from './focus'
import fixedTop from './fixed-top'

export default function install (Vue) {
  Vue.directive('focus', focus)
  Vue.directive('fixed-top', fixedTop)
}
