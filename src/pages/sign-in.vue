<template>
  <form @submit.prevent="submit">
    <div>
      <input type="email" title="输入邮箱" v-model="m.email" v-focus>
    </div>
    <div>
      <input title="输入密码" :type="showPwd ? 'text' : 'password'" v-model="m.password">
      <button type="button" @click="showPwd = !showPwd">
        <span v-show="showPwd">隐藏</span>
        <span v-else>显示</span>
        密码
      </button>
    </div>
    <div>
      <button type="submit">登陆</button>
    </div>
  </form>
</template>

<script type="text/babel">
  import { signIn, hasSigned } from '../vuex/actions'
  export default {
    vuex: {
      actions: { signIn, hasSigned }
    },
    route: {
      data () {
        // 如果已经登录过了则直接去后台管理页面
        if (this.hasSigned()) {
          this.go()
        }
      }
    },
    data () {
      return {
        showPwd: false,
        m: {
          email: '',
          password: ''
        }
      }
    },
    methods: {

      /**
       * 登录的方法
       */
      submit () {
        const { m } = this
        this.signIn(m.email, m.password).then(this.go)
      },

      /**
       * 登录成功后跳转到后续页面
       */
      go () {
        this.$router.replace(this.$route.query.go || { name: '后台首页' })
      }
    }
  }
</script>
