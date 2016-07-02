const loaded = []

const alias = {
  tinymce: 'https://cdn.tinymce.com/4/tinymce.min.js'
}

/**
 * 动态加载一个脚本文件
 * @param {String} url
 * @returns {Promise}
 */
export default function (url) {
  const _url = alias[url] || url
  if (loaded.indexOf(_url) >= 0) return Promise.resolve()
  const script = document.createElement('script')
  script.src = _url
  return new Promise((resolve, reject) => {
    script.onload = () => {
      loaded.push(_url)
      resolve()
    }
    script.onerror = reject
    document.head.appendChild(script)
  })
}
