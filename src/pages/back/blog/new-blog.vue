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
               required
               v-model="title"
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
        title: ''
      }
    },
    methods: {
      submit () {
        this.$refs.tinymce.getContent().then(content => {
          const blog = {
            title: this.title,
            content
          }
          if (this.id) {
            blog['.key'] = this.id
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
      const { id } = this.$route.params
      if (id) {
        api.getBlog(id).then(model => {
          this.title = model.title
          this.$refs.tinymce.setContent(model.content)
        })
      }
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
