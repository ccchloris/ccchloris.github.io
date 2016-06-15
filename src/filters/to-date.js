/**
 * 根据一个数字类型的日期返回一个人类可读的字符串
 * @example 2016年6月15日 21:24:21
 * @param time
 * @returns {String}
 */
export default function (time) {
  const date = new Date(time)
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
