class API {
  constructor () {
    const root = this.root = new Wilddog('https://my-baby.wilddogio.com/')
    this.blogs = root.child('blogs')
  }

  /**
   * 判断用户是否已经登录
   * @returns {Boolean}
   */
  isSignIn () {
    return !!this.root.getAuth()
  }

  /**
   * 获取用户的登录信息
   * @returns {*}
   */
  getAuth () {
    return this.root.getAuth()
  }

  /**
   * 登陆后台的方法
   * @param {String} email
   * @param {String} password
   * @returns {Promise}
   */
  signIn (email, password) {
    return new Promise((resolve, reject) => {
      this.root.authWithPassword({
        email,
        password
      }, (err, data) => {
        if (err) {
          reject(err.code)
          return
        }
        resolve(data)
      })
    })
  }

  /**
   * 保存博客的方法
   * @param blog
   */
  saveBlog (blog) {
    return new Promise((resolve, reject) => {
      // todo 这个方法同时也是修改博客的方法
      const now = Wilddog.ServerValue.TIMESTAMP
      blog.createTime = now // todo 当修改文件时,这里不要写 createTime
      blog.lastModifyTime = now
      this.blogs.push(blog, err => {
        if (err) {
          reject(err)
          return
        }
        resolve()
      })
    })
  }

  /**
   * 查询博客的方法
   * @param options
   * @param {Number} options.page - 第几页
   * @param {Number} options.size - 每页多少篇博客
   */
  queryBlog (options) {
    return new Promise(resolve => {
      // todo 查询blog, 而不是返回所有 blog
      this.blogs.orderByChild('lastModifyTime').once('value', snapshot => {
        resolve(snapshot.val())
      })
    })
  }

  /**
   * 删除一篇文章
   * @param {String} key - 那篇文章的 key
   * @returns {Promise}
   */
  deleteBlog (key) {
    return new Promise((resolve, reject) => {
      this.blogs.child(key).remove(err => {
        if (err) {
          reject(err)
          return
        }
        resolve()
      })
    })
  }
}

export default new API()
