<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="blog title" v-model="m.title">
    <a-tinymce v-ref:tinymce></a-tinymce>
    <button type="submit">保存</button>
  </form>
</template>

<script type="text/babel">
  import api from '../../services/api'
  export default {
    data () {
      return {
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
          api.saveBlog(blog)
        })
      }
    },
    ready () {
      this.$refs.tinymce.setContent(this.m.$_content)
    }
  }
</script>
