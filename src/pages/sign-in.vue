<template>
  <div id="sign-in" class="container">
    <form class="form-horizontal center-block" @submit.prevent="submit">
      <div class="form-group">
        <label for="email" class="col-xs-3 col-sm-2 control-label">邮箱:</label>
        <div class="col-xs-9 col-sm-10">
          <input id="email" type="email" class="form-control" title="输入邮箱" v-model="m.email" v-focus>
        </div>
      </div>
      <div class="form-group">
        <label for="pwd" class="col-xs-3 col-sm-2 control-label">密码:</label>
        <div class="col-xs-9 col-sm-10">
          <div class="input-group">
            <input id="pwd"
                   class="form-control"
                   title="输入密码"
                   :type="showPwd ? 'text' : 'password'"
                   v-model="m.password">
            <div class="input-group-addon" @click="showPwd = !showPwd">
              <span v-show="showPwd">隐藏</span>
              <span v-else>显示</span>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-block" :disabled="disabled">登录</button>
      <div class="text-center bottom-link">
        <a v-link="{name:'首页'}">回到首页</a>
      </div>
    </form>
  </div>
</template>

<script type="text/babel">
  import api from '../services/api'
  export default {
    route: {
      data () {
        // 如果已经登录过了则直接去后台管理页面
        if (api.isSignIn()) {
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
    computed: {
      /**
       * 当没有输入用户名或密码时,禁用登录按钮
       */
      disabled () {
        const { email, password } = this.m
        return !email || !password
      }
    },
    methods: {
      /**
       * 登录的方法
       */
      submit () {
        const { m } = this
        api.signIn(m.email, m.password).then(this.go)
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

<style lang="sass" rel="stylesheet/scss">
  @import "../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap/variables";

  #sign-in {
    // 让登录窗口垂直居中
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    form {
      max-width: 400px;
      label {
        padding-top: 7px;
        text-align: left;
      }

      .bottom-link {
        margin-top: $form-group-margin-bottom;
      }
    }
  }
</style>
