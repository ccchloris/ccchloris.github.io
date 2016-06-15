<template>
  <div id="new-blog">
    <ol class="breadcrumb">
      <li><a v-link="{name:'后台文章列表'}">文章管理</a></li>
      <li class="active" v-text="id ? '编辑文章' : '写文章'"></li>
    </ol>
    <form @submit.prevent="submit">
      <div class="form-group">
        <input type="text"
               class="form-control"
               placeholder="文章标题"
               title="输入邮箱"
               v-model="m.title"
               v-focus>
      </div>

      <a-tinymce v-ref:tinymce></a-tinymce>

      <button type="submit" class="btn btn-primary bottom-btn">保存</button>
    </form>
  </div>
</template>

<script type="text/babel">
  import api from '../../../services/api'
  export default {
    data () {
      return {
        id: this.$route.params.id,
        m: {
          title: '',
          $_content: ''
        }
      }
    },
    methods: {
      submit () {
        this.$refs.tinymce.getContent().then(content => {
          const blog = {
            title: this.m.title,
            content
          }
          api.saveBlog(blog).then(() => {
            window.alert('保存成功!')
            this.$router.go({
              name: '后台文章列表'
            })
          })
        })
      }
    },
    ready () {
      this.$refs.tinymce.setContent(this.m.$_content)
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss">
  #new-blog {
    .bottom-btn {
      margin-top: 15px;
    }
  }
</style>
