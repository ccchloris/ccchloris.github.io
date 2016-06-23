/**
 * 动态加载一个脚本文件
 * @param {String} url
 * @returns {Promise}
 */
export default function (url) {
  const script = document.createElement('script')
  script.src = url
  return new Promise((resolve, reject) => {
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}
