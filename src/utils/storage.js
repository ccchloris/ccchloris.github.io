/**
 * 封装一层 localStorage 与 sessionStorage。
 */

import _cloneDeep from 'lodash/cloneDeep'
import _has from 'lodash/has'
import _isNull from 'lodash/isNull'

const { stringify, parse } = JSON

/**
 * 封装的 Storage 构造函数。
 */
class Storage {
  constructor (type) {
    this.storage = window[ type ]
    this.cache = {}
  }

  /**
   * 设置数据。
   * 注意: 设置值时总是会先尝试使用 JSON.stringify() 解析数据,所以实际保存在 localStorage 内的值可能与你预期的不相同。
   * 例如:
   *
   * ```js
   * storage.set('key','string');
   * localStorage.getItem('key') === '"string"' // 注意两边的双引号
   * ```
   *
   * 完整的列表见 https://jsfiddle.net/lmk123/kzw1c9v0/
   * @param {String} key
   * @param {*} value
   */
  set (key, value) {
    // 先使用 _cloneDeep 将值转换一遍。
    // 例如如果 value 是一个函数,那么 _cloneDeep(value) 会返回一个空对象保存到 storage 中
    // 否则 stringify(value) 会返回 undefined,那么 storage 里保存的就是字符串形式的 "undefined" 了
    const _value = _cloneDeep(value)
    this.storage.setItem(key, stringify(_value))
    this.cache[ key ] = _value
  }

  /**
   * 读取值。
   * 注意: 读取值时总是会先尝试使用 JSON.parse() 解析数据,所以实际得到的数据可能会与你预期的不相同
   * 例如:
   *
   * ```js
   * localStorage.setItem('key','100')
   * storage.get('key') === 100 // 变成了 Number
   * ```
   *
   * 推荐在设置或读取值时都不要使用底层的 window.localStorage:
   *
   * ```js
   * storage.set('key','100')
   * storage.get('key') === '100' // 仍然是 String
   * ```
   *
   * 完整的列表见 https://jsfiddle.net/lmk123/kzw1c9v0/
   * @param {String} key
   * @returns 若没有这个 key 则返回 undefined
   */
  get (key) {
    // 先从 cache 内读取
    const { cache } = this
    if (_has(cache, key)) return _cloneDeep(cache[ key ])

    const stringValue = this.storage.getItem(key)
    if (_isNull(stringValue)) {
      return undefined
    }

    let jsonValue
    try {
      jsonValue = parse(stringValue)
    } catch (e) {}

    return (cache[ key ] = jsonValue || stringValue)
  }

  remove (key) {
    delete this.cache[ key ]
    this.storage.removeItem(key)
  }

  clear (key) {
    this.cache = {}
    this.storage.clear()
  }
}

export const local = new Storage('localStorage')

export const session = new Storage('sessionStorage')
