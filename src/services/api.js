class API {
  constructor () {
    this.root = new Wilddog('https://my-baby.wilddogio.com/')
    this.blogs = this.root.child('blogs')
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
        } else {
          /* data 的数据结构:
           {
           "provider": "password",
           "uid": "simplelogin:1464836206865413",
           "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJpYXQiOjE0NjQ4NDA1MTQsImQiOnsidWlkIjoic2ltcGxlbG9naW46MTQ2NDgzNjIwNjg2NTQxMyIsInByb3ZpZGVyIjoicGFzc3dvcmQiLCJ0b2tlblZlcnNpb24iOjB9fQ.cekc6uweAD4qGMMDxiF6Z7BnLf9WywPAI6ved3y-2bg",
           "password": {
           "email": "milk.lee@qq.com",
           "isTemporaryPassword": false
           },
           "expires": 1464926914,
           "auth": {
           "uid": "simplelogin:1464836206865413",
           "provider": "password",
           "tokenVersion": 0
           }
           }
           */
          resolve({
            email, // 用户的邮箱地址
            uid: data.uid, // 用户的唯一 id
            expires: 1464926914, // 此次登陆的过期时间
            isTemp: data.password.isTemporaryPassword // 是否是临时密码
          })
        }
      })
    })
  }

  /**
   * 保存博客的方法
   * @param blog
   */
  saveBlog (blog) {
    // todo 这个方法同时也是修改博客的方法
    const now = Wilddog.ServerValue.TIMESTAMP
    blog.createTime = now // todo 当修改文件时,这里不要写 createTime
    blog.lastModifyTime = now
    this.blogs.push(blog)
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
}

export default new API()
