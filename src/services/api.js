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
   * 保存(包括修改)博客的方法
   * @param blog
   */
  saveBlog (blog) {
    return new Promise((resolve, reject) => {
      const now = Wilddog.ServerValue.TIMESTAMP
      const key = blog['.key']
      if (key) {
        delete blog['.key']
      } else {
        blog.createTime = now
      }
      blog.lastModifyTime = now
      if (key) {
        this.blogs.child(key).update(blog, err => {
          if (err) {
            reject(err)
            return
          }
          resolve()
        })
      } else {
        this.blogs.push(blog, err => {
          if (err) {
            reject(err)
            return
          }
          resolve()
        })
      }
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
   * 获取一篇文章的数据
   * @param key
   * @returns {Promise}
   */
  getBlog (key) {
    return new Promise((resolve, reject) => {
      this.blogs.child(key).once('value', value => {
        resolve(value.val())
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
